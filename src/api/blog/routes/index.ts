import customRouter from './custom-blog-routes'; // Importa as rotas customizadas

export default {
  routes: [
    ...customRouter.routes, // Adiciona as rotas customizadas
  ],
};