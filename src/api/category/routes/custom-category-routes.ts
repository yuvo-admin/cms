export default {
    routes: [
      {
        method: 'GET',
        path: '/categories/slug/:slug',
        handler: 'category.findBySlug',
        config: {
          auth: false,
        },
      },
      {
        method: 'GET',
        path: '/categories/posts/:slug',
        handler: 'category.findPostsBySlug',
        config: {
          auth: false,
        },
      },
    ],
  };