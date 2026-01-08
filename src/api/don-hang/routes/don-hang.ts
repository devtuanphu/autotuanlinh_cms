/**
 * don-hang router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::don-hang.don-hang', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
    create: {
      auth: false,
    },
    update: {
      auth: false,
    },
    delete: {
      auth: false,
    },
  },
});

