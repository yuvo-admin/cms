import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    try {
      const post = await strapi.db.query('api::post.post').findOne({
        where: { slug },
        populate: ['category', 'author', 'cover', 'blocks', 'blocks.table.headers', 'blocks.table.rows', 'blocks.button', 'blocks.cards', 'blocks.cards.image', 'blocks.chart', 'blocks.review', 'blocks.image', 'metadata.shareImage'],
      });

      if (!post) {
        return ctx.notFound('Post not found');
      }

      // Extrai os IDs das categorias do post atual
      const categoryIds = post.category.map((cat) => cat.id);

      // Busca posts relacionados que compartilham pelo menos uma categoria
      const related = await strapi.db.query('api::post.post').findMany({
        where: {
          category: { $in: categoryIds },
          slug: { $ne: post.slug },
        },
        // limit: 4, 
        populate: ['category', 'cover'],
      });

      post.related = related?.reduce((acc, post) => {
        if (!acc.some((p) => p.slug === post.slug)) {
          acc.push(post);
        }
        return acc;
      }, []).slice(0, 4);;

      return {
        post
      };
    } catch (error) {
      strapi.log.error('Error in findBySlug:', error);
      return ctx.internalServerError('Something went wrong');
    }
  },
}));