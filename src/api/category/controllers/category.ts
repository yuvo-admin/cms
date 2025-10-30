/**
 * category controller
 */

import { factories } from '@strapi/strapi'

const populateParamsFindBySlug = [
    'banner',
    'banner.cover',
    'banner.coverMobile',
    'categoryMostViewed',
    'categoryMostViewed.posts',
    'categoryMostViewed.posts.cover',
    'categoriesTag',
    'categoriesTag.categories',
    'metadata'
]

const populateParamsFindPostsBySlug = [
    'category',
    'cover',
]

export default factories.createCoreController('api::category.category',
    ({ strapi }) => ({
        async findBySlug(ctx) {
            const { slug } = ctx.params;
            // Garantir que page e pageSize são números
            const page = Number(ctx.query.page) || 1;
            const limit = Math.min(Number(ctx.query.limit) || 12, 12); // Máximo de 12
            const sort = ctx.query.sort ?? 'asc'; // Ordenação personalizada

            try {
                // 1. Busca a categoria principal
                const category = await strapi.db.query('api::category.category').findOne({
                    where: { slug },
                    populate: populateParamsFindBySlug
                });

                if (!category) {
                    return ctx.notFound('Category not found');
                }

                // 2. Busca os posts da categoria com paginação, filtros e ordenação
                const posts = await strapi.db.query('api::post.post').findMany({
                    where: {
                        category: category.id,
                        publishedAt: { $notNull: true }
                    },
                    populate: ['category', 'cover'],
                    orderBy: { publishedAt: sort }, // Usa a ordenação personalizada
                    limit: limit,
                    offset: (page - 1) * limit
                });

                // 3. Conta o total de posts para a paginação
                const total = await strapi.db.query('api::post.post').count({
                    where: {
                        category: category.id,
                        publishedAt: { $notNull: true }
                    }
                });

                // 4. Processa os posts mais vistos para remover duplicados
                if (category.categoryMostViewed?.posts) {
                    category.categoryMostViewed.posts = category.categoryMostViewed.posts.reduce((acc, post) => {
                        if (!acc.some((p) => p.slug === post.slug)) {
                            acc.push(post);
                        }
                        return acc;
                    }, []);
                }

                // 5. Remove duplicados dos posts principais
                const uniquePosts = posts.reduce((acc, post) => {
                    if (!acc.some((p) => p.slug === post.slug)) {
                        acc.push(post);
                    }
                    return acc;
                }, []);

                return {
                    data: {
                        ...category,
                        posts: uniquePosts,
                        pagination: {
                            page,
                            limit,
                            pageCount: Math.ceil(total / limit),
                            total
                        },
                        sortOrder: sort // Opcional: retorna qual ordenação foi usada
                    }
                };
            } catch (error) {
                strapi.log.error('Error in findBySlug:', error);
                return ctx.internalServerError('Something went wrong');
            }
        },

        async findPostsBySlug(ctx) {
            const { slug } = ctx.params;
            const { page = 1, limit = 12, sort = 'asc' } = ctx.query;

            // Validação numérica
            const pageNumber = Number(page);
            const limitNumber = Math.min(Number(limit), 12);

            try {
                // 1. Busca a categoria principal
                const category = await strapi.db.query('api::category.category').findOne({
                    where: { slug },
                    populate: populateParamsFindPostsBySlug
                });

                if (!category) {
                    return ctx.notFound('Category not found');
                }

                // 2. Busca os posts da categoria com paginação, filtros e ordenação
                const posts = await strapi.db.query('api::post.post').findMany({
                    where: {
                        category: category.id,
                        publishedAt: { $notNull: true }
                    },
                    populate: ['category', 'cover'],
                    orderBy: { publishedAt: sort }, // Usa a ordenação personalizada
                    limit: limitNumber,
                    offset: (pageNumber - 1) * limitNumber
                });

                // 3. Conta o total de posts para a paginação
                const total = await strapi.db.query('api::post.post').count({
                    where: {
                        category: category.id,
                        publishedAt: { $notNull: true }
                    }
                });

                // 4. Remove duplicados dos posts principais
                const uniquePosts = posts.reduce((acc, post) => {
                    if (!acc.some((p) => p.slug === post.slug)) {
                        acc.push(post);
                    }
                    return acc;
                }, []);

                return {
                    data: {
                        ...category,
                        posts: uniquePosts,
                        pagination: {
                            page: Number(page),
                            limit: Number(limit),
                            pageCount: Math.ceil(total / limitNumber),
                            total
                        },
                        sortOrder: sort 
                    }
                };
            } catch (error) {
                strapi.log.error('Error in findPostsBySlug:', error);
                return ctx.internalServerError('Something went wrong');
            }
        },
    }));