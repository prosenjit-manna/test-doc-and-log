'use strict';

/**
 * app-module router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::app-module.app-module');
