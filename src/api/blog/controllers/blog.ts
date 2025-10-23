/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  async getBlogHome(ctx) {
    try {
      const blogHome = await strapi.db.query('api::blog.blog').findOne({
        populate: [
          'banners',
          'banners.category',
          'banners.cover',
          'banners.coverMobile',
          'categoriesTag',
          'categoriesTag.categories',
          'categories',
          'categories.category',
          'categories.posts',
          'categories.posts.category',
          'categories.posts.cover',
          'categories.posts.coverMobile',
          'metadata'
        ],
      });

      if (!blogHome) {
        strapi.log.error('Blog Home not found');
        return ctx.notFound('Blog Home not found');
      }

      if (blogHome.categories) {
        blogHome.categories.map((category) => {
          if (category.posts) {
            category.posts = category.posts.reduce((acc, post) => {
              if (!acc.some((p) => p.slug === post.slug)) {
                acc.push(post);
              }
              return acc;
            }, [])
          }
        })
      }

      return {
        data: blogHome
      };
    } catch (error) {
      strapi.log.error('Error in getBlogHome:', error);
      return ctx.internalServerError('Something went wrong');
    }
  },
}));