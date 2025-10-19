export default {
    routes: [
      {
        method: 'GET',
        path: '/blog/home',
        handler: 'blog.getBlogHome',
        config: {
          auth: false,
        },
      },
    ],
  };