/**
 * Custom routes for danh-muc-cap-ba
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/danh-muc-san-phams/cap-ba/:slug',
      handler: 'danh-muc-san-pham.getDanhMucCapBaBySlug',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

