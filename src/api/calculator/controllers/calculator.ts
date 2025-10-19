/**
 * calculator controller
 */

import { factories } from '@strapi/strapi'

const populateParams = [
  'banner',
  'icon',
  'information',
  'calculators',
  'calculators.calculators',
  'calculators.calculators.icon',
  'blocks',
  'blocks.table.headers',
  'blocks.table.rows',
  'blocks.button',
  'blocks.cards',
  'blocks.review',
  'blocks.image',
  'blocks.cards.image',
  'review',
  'review.review',
  'review.image',
  'review.button',
  'metadata',
]

export default factories.createCoreController('api::calculator.calculator',
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const { slug } = ctx.params;

      try {
        const calculator = await strapi.db.query('api::calculator.calculator').findOne({
          where: { slug },
          populate: populateParams
        });

        if (!calculator) {
          return ctx.notFound('Calculator not found');
        }

        return {
          calculator
        };
      } catch (error) {
        strapi.log.error('Error in findBySlug:',
          error);
        return ctx.internalServerError('Something went wrong');
      }
    },
  }));