const TodosRoutes = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('todos', {
      url: "/todos",
      templateUrl: "components/todos/todos.html",
      controller: 'TodosController',
      controllerAs: 'Todos'
    })
};

TodosRoutes.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

export { TodosRoutes };
