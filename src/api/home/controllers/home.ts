/**
 * home controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
  async getHome(ctx) {
    try {
      const home = await strapi.db.query('api::home.home').findOne({
        populate: [
          'banner',
          'banner.image',
          'banner.imageMobile',
          'banner.button',
          'banner.tag',
          'tools',
          'tools.tools',
          'tools.tools.image',
          'tools.tools.icon',
          'tools.tools.button',
          'blog',
          'blog.posts',
          'blog.posts.cover',
          'blog.posts.category',
          'blog.categories',
          'faq',
          'faq.faq'
        ],
      });

      if (!home) {
        strapi.log.error('Home not found');
        return ctx.notFound('Home not found');
      }

      if (home.blog && home.blog.posts) {
        home.blog.posts = home.blog.posts.reduce((acc, post) => {
          if (!acc.some((p) => p.slug === post.slug)) {
            acc.push(post);
          }
          return acc;
        }, [])
      }

      return {
        data: home
      };
    } catch (error) {
      strapi.log.error('Error in getHome:', error);
      return ctx.internalServerError('Something went wrong');
    }
  },
}));