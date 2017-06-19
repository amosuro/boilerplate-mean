import { HomeRoutes } from './home.routes';

// Any controllers, directives, services etc that belong to the module
const Home = angular.module('Home', ['ngResource', 'ui.router'])
              .config(HomeRoutes);

export { Home };
