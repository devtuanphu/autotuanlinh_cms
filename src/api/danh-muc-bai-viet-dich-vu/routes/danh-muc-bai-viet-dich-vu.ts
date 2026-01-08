/**
 * danh-muc-bai-viet-dich-vu router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::danh-muc-bai-viet-dich-vu.danh-muc-bai-viet-dich-vu', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});

