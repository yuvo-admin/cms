export default {
    routes: [
      {
        method: 'GET',
        path: '/calculators-home/home',
        handler: 'calculators-home.getCalculatorsHome',
        config: {
          auth: false,
        },
      },
    ],
  };