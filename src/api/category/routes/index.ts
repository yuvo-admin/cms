import customRouter from './custom-category-routes'; // Importa as rotas customizadas

export default {
  routes: [
    ...customRouter.routes, // Adiciona as rotas customizadas
  ],
};