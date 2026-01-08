/**
 * danh-muc-san-pham router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::danh-muc-san-pham.danh-muc-san-pham', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});

