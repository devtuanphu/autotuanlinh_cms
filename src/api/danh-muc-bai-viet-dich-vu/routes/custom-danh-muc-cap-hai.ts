/**
 * Custom routes for danh-muc-cap-hai (dich vu)
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/danh-muc-bai-viet-dich-vus/cap-hai/:slug',
      handler: 'danh-muc-bai-viet-dich-vu.getDanhMucCapHaiBySlug',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

