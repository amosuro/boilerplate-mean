import 'angular';
import 'angular-ui-router';
import 'angular-resource';

import { APP_CONFIG } from './app.constant';

import { Todos } from './components/todos/todos.module';
import { Home } from './components/home/home.module';

// Our main app modules & all dependancies
angular.module('myApp', ['ui.router', 'Home', 'Todos'])
  .constant('APP_CONFIG', APP_CONFIG);
