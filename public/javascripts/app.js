var publimasterApp = angular.module( "publimasterApp", ["ngRoute"] );

publimasterApp.config([ '$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      controller:'DashboardCtrl',
      templateUrl:'/app.html'
    })
    .when('/clientes',{
      controller: 'ClientesCtrl',
      templateUrl: '/views/clientes/list.html'
    })
    .when('/clientes/new',{
      controller: 'ClientesCtrl',
      templateUrl: '/views/clientes/new.html'
    })
    .otherwise({
      redirectTo:'/'
    });

} ]);