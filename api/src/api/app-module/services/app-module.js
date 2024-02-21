'use strict';

/**
 * app-module service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-module.app-module');
