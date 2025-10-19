import customRouter from './custom-calculators-home-routes'; // Importa as rotas customizadas

export default {
  routes: [
    ...customRouter.routes, // Adiciona as rotas customizadas
  ],
};