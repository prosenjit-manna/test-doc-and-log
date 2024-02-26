'use strict';

/**
 * user-meta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-meta.user-meta');
