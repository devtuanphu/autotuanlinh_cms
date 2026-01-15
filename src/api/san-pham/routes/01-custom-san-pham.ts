export default {
  routes: [
    {
      method: 'POST',
      path: '/san-phams/:slug/review',
      handler: 'api::san-pham.san-pham.addReview',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/san-phams/:slug/related',
      handler: 'api::san-pham.san-pham.getRelated',
      config: {
        auth: false,
      },
    },
  ],
};
