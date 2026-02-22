'use strict';

/**
 * srm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::srm.srm');
