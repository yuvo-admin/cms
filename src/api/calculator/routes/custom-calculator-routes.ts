export default {
    routes: [
      {
        method: 'GET',
        path: '/calculators/slug/:slug',
        handler: 'calculator.findBySlug',
        config: {
          auth: false,
        },
      },
    ],
  };