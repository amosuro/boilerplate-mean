import { APP_CONFIG } from '../../app.constant';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRoutes } from './todos.routes';

// Any controllers, directives, services etc that belong to the module
const Todos = angular.module('Todos', ['ui.router'])
                .service('TodosService', ['$resource', 'APP_CONFIG', TodosService])
                .controller('TodosController', ['TodosService', TodosController])
                .config(TodosRoutes)

export { Todos };
