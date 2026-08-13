import React from "react";
import Link from "next/link";

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  } catch (e) {
    return dateStr;
  }
}

export default async function VerificationView({ uid }) {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  let staffData = null;

  if (uid) {
    try {
      // Search verified-staffs by the linked people's name (deep relation filter)
      const fetchUrl = `${strapiUrl}/api/verified-staffs?filters[uid][$eq]=${encodeURIComponent(uid)}&populate[person][populate]=*`;
      const res = await fetch(fetchUrl, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        next: { revalidate: 0 }
      });

      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          const attributes = json.data[0].attributes;
          const peopleAttr = attributes.person?.data?.attributes;

          let statusVal = attributes.status || "active";
          statusVal = statusVal.charAt(0).toUpperCase() + statusVal.slice(1).toLowerCase();

          const pfpUrl = peopleAttr?.pfp?.data?.attributes?.url;

          staffData = {
            name: peopleAttr?.name,
            designation: peopleAttr?.Designation,
            department: peopleAttr?.Department,
            email: peopleAttr?.email,
            imageUrl: pfpUrl ? `${strapiUrl}${pfpUrl}` : null,
            employeeId: attributes.employeeId,
            status: statusVal,
            verifiedDate: formatDate(attributes.verifiedDate || attributes.createdAt)
          };
        }
      }
    } catch (error) {
      console.error("Error fetching verification data:", error);
    }
  }

  if (!staffData) {
    return (
      <div className="min-h-screen py-32 px-4 bg-sky-50 flex items-center justify-center font-sans">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 text-center max-w-sm w-full">
          <p className="text-red-600 font-bold text-lg">Staff member not found</p>
        </div>
      </div>
    );
  }

  const isStatusActive = staffData.status === "Active";
  const isStatusRevoked = staffData.status === "Revoked";
  const statusColor = isStatusActive ? "text-emerald-600" : isStatusRevoked ? "text-red-600" : "text-amber-500";
  const statusLabel = isStatusActive ? "✔ Verified Staff" : isStatusRevoked ? "✖ Revoked Staff" : "⚠ Expired Card";

  return (
    <div className="min-h-screen py-32 px-4 bg-sky-50 flex items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 max-w-sm w-full text-center text-slate-800">

        <div className={`font-bold text-lg ${statusColor} mb-6`}>
          {statusLabel}
        </div>

        {staffData.imageUrl && (
          <div className="flex justify-center mb-4">
            <div className={`w-24 h-24 rounded-full overflow-hidden border-2 ${isStatusActive ? "border-emerald-500" : isStatusRevoked ? "border-red-500" : "border-amber-500"}`}>
              <img src={staffData.imageUrl} alt={staffData.name} className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {staffData.name && (
          <div className="text-xl font-bold text-slate-900 mt-2">{staffData.name}</div>
        )}

        {staffData.designation && (
          <div className="text-sm font-medium text-slate-500 mt-1">{staffData.designation}</div>
        )}

        {staffData.department && (
          <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider mt-6 whitespace-pre-line leading-relaxed">
            {staffData.department}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-4">
          {staffData.employeeId && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Employee ID</div>
              <div className="text-sm font-bold text-slate-700 mt-1">{staffData.employeeId}</div>
            </div>
          )}

          {staffData.status && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</div>
              <div className={`text-sm font-bold mt-1 flex items-center justify-center gap-1.5 ${statusColor}`}>
                <span>●</span>
                <span>{staffData.status}</span>
              </div>
            </div>
          )}

          {staffData.verifiedDate && (
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verified</div>
              <div className="text-sm font-bold text-slate-700 mt-1">{staffData.verifiedDate}</div>
            </div>
          )}
        </div>

        <div className="my-6 border-t border-slate-200"></div>

        <div className="flex flex-col gap-4 font-semibold text-xs tracking-wide text-slate-600">
          {staffData.email && (
            <a href={`mailto:${staffData.email}`} className="hover:text-sky-800 transition-colors">
              Official Email
            </a>
          )}

          <Link href="/" className="hover:text-sky-800 transition-colors">
            Visit CSD Website
          </Link>

          <a
            href={`mailto:csd@nitk.edu.in?subject=Report Lost Card - ${staffData.employeeId}`}
            className="hover:text-red-700 transition-colors text-slate-500 hover:text-slate-700"
          >
            Report Lost Card
          </a>
        </div>

      </div>
    </div>
  );
}
