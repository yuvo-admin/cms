/**
 * calculators-home controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::calculators-home.calculators-home', ({ strapi }) => ({
  async getCalculatorsHome(ctx) {
    try {
      const calculatorsHome = await strapi.db.query('api::calculators-home.calculators-home').findOne({
        populate: [
          'banners',
          'banners.image',
          'banners.imageMobile',
          'banners.tag',
          'banners.link',
          'categories',
          'categories.calculators',
          'categories.calculators.icon',
        ],
      });

      if (!calculatorsHome) {
        strapi.log.error('Calculators Home not found');
        return ctx.notFound('Calculators Home not found');
      }

      if (calculatorsHome.categories) {
        calculatorsHome.categories.map((category) => {
          if (category.calculators) {
            category.calculators = category.calculators.reduce((acc, calculator) => {
              if (!acc.some((p) => p.slug === calculator.slug)) {
                acc.push(calculator);
              }
              return acc;
            }, [])
          }
        })
      }

      return {
        data: calculatorsHome
      };
    } catch (error) {
      strapi.log.error('Error in getCalculatorsHome:', error);
      return ctx.internalServerError('Something went wrong');
    }
  },
}));