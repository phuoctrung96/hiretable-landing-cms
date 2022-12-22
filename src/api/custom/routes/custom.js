module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/custom/create',
      handler: 'custom.createDeal',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
