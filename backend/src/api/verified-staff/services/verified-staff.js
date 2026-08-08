'use strict';

/**
 * verified-staff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::verified-staff.verified-staff');
