'use strict';

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      const employeeId = `CSD-${String(result.id).padStart(3, '0')}`;

      await strapi.entityService.create('api::verified-staff.verified-staff', {
        data: {
          employeeId,
          status: 'active',
          verified_date: new Date().toISOString().split('T')[0],
          person: result.id,
          publishedAt: new Date().toISOString()
        }
      });
      console.log(`[verified-staff] Created record for "${result.name}" (${employeeId})`);
    } catch (err) {
      console.error('[verified-staff] afterCreate error:', err);
    }
  }
};
