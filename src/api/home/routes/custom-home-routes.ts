export default {
    routes: [
      {
        method: 'GET',
        path: '/home/all',
        handler: 'home.getHome',
        config: {
          auth: false,
        },
      },
    ],
  };