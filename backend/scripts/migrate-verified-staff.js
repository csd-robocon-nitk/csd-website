/**
 * One-time migration script: creates verified-staff records for all existing people.
 *
 * Run ONCE after deploying the verified-staff content type to the live server:
 *
 *   STRAPI_TOKEN=<your-full-access-api-token> node scripts/migrate-verified-staff.js
 *
 * Optional: override the Strapi URL (defaults to localhost):
 *   STRAPI_URL=https://csd.nitk.ac.in/strapi STRAPI_TOKEN=<token> node scripts/migrate-verified-staff.js
 *
 * It is safe to re-run — anyone who already has a verified-staff record is skipped.
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('\nError: STRAPI_TOKEN is required.\n');
  console.error('Usage:');
  console.error('  STRAPI_TOKEN=<token> node scripts/migrate-verified-staff.js\n');
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${STRAPI_TOKEN}`
};

/** Fetch all records from a paginated Strapi endpoint */
async function fetchAll(path) {
  let page = 1;
  const pageSize = 100;
  let allData = [];

  while (true) {
    const separator = path.includes('?') ? '&' : '?';
    const url = `${STRAPI_URL}${path}${separator}pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
    const res = await fetch(url, { headers });

    if (!res.ok) {
      throw new Error(`GET ${url} → ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    allData = allData.concat(json.data || []);

    if (page >= (json.meta?.pagination?.pageCount || 1)) break;
    page++;
  }

  return allData;
}

async function migrate() {
  console.log('─────────────────────────────────────────');
  console.log(' CSD verified-staff migration');
  console.log(`  Strapi URL : ${STRAPI_URL}`);
  console.log('─────────────────────────────────────────\n');

  // 1. Fetch all people
  console.log('Fetching people collection...');
  const people = await fetchAll('/api/peoples');
  console.log(`  → Found ${people.length} people.\n`);

  // 2. Fetch existing verified-staff records to skip those already linked
  console.log('Fetching existing verified-staff records...');
  let existingRecords = [];
  try {
    existingRecords = await fetchAll('/api/verified-staffs?populate[people]=*');
  } catch (_) {
    // Collection may be empty — that is fine
  }

  const linkedPeopleIds = new Set(
    existingRecords
      .filter(vs => vs.attributes?.people?.data?.id)
      .map(vs => vs.attributes.people.data.id)
  );
  console.log(`  → Found ${existingRecords.length} existing record(s). ${linkedPeopleIds.size} already linked.\n`);

  // 3. Create a verified-staff record for each person that doesn't have one
  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const person of people) {
    const personName = person.attributes?.name || `(id: ${person.id})`;

    if (linkedPeopleIds.has(person.id)) {
      console.log(`  ⬜ Skip    ${personName}`);
      skipped++;
      continue;
    }

    const employeeId = `CSD-${String(person.id).padStart(3, '0')}`;

    try {
      const res = await fetch(`${STRAPI_URL}/api/verified-staffs`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          data: {
            employeeId,
            status: 'active',
            verified_date: new Date().toISOString().split('T')[0],
            person: person.id,
            publishedAt: new Date().toISOString()
          }
        })
      });

      if (res.ok) {
        console.log(`  ✔  Created  ${personName}  →  ${employeeId}`);
        created++;
      } else {
        const body = await res.json();
        const msg = body?.error?.message || JSON.stringify(body);
        console.error(`  ✖  Failed   ${personName}  →  ${msg}`);
        failed++;
      }
    } catch (err) {
      console.error(`  ✖  Error    ${personName}  →  ${err.message}`);
      failed++;
    }
  }

  console.log('\n─────────────────────────────────────────');
  console.log(` Migration complete`);
  console.log(`  ✔  Created : ${created}`);
  console.log(`  ⬜ Skipped : ${skipped}`);
  console.log(`  ✖  Failed  : ${failed}`);
  console.log('─────────────────────────────────────────\n');

  if (failed > 0) process.exit(1);
}

migrate().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
