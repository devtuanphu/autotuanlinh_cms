/**
 * san-pham router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::san-pham.san-pham', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});

