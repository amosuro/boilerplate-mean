const HomeRoutes = function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "components/home/home.html"
    })
};

HomeRoutes.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
];

export { HomeRoutes };
