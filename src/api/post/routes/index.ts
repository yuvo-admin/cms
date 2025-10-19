import customRouter from './custom-post-routes'; // Importa as rotas customizadas

export default {
  routes: [
    ...customRouter.routes, // Adiciona as rotas customizadas
  ],
};