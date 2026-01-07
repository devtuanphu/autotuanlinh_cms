/**
 * header router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/header',
      handler: 'header.getHeaderData',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};

