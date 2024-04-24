'use strict';

/**
 * worker-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worker-card.worker-card');
