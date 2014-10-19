var publimasterApp = angular.module( "publimasterApp", ["ngRoute", "rails"] );

publimasterApp.config([ '$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    controller:'DashboardCtrl',
    templateUrl:'/app.html'
  })
  .when('/users/login', {
    controller: 'UsersCtrl',
    templateUrl: '/users/login.html'
  })
  .when('/clientes',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/list.html'
  })
  .when('/clientes/new',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/new.html'
  })
  .when('/clientes/:id/edit',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/edit.html'
  })
  .otherwise({
    redirectTo:'/'
  });

} ]);
