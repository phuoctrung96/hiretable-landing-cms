module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/custom/create',
      handler: 'custom.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
