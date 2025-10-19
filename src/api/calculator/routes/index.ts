import customRouter from './custom-calculator-routes'; // Importa as rotas customizadas

export default {
  routes: [
    ...customRouter.routes, // Adiciona as rotas customizadas
  ],
};