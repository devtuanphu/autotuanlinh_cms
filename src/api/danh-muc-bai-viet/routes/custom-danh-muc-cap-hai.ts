/**
 * Custom routes for danh-muc-cap-hai
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/danh-muc-bai-viets/cap-hai/:slug',
      handler: 'danh-muc-bai-viet.getDanhMucCapHaiBySlug',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

