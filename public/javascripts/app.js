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
    templateUrl: '/views/clientes/list.html',
    resolve: {
      type: function(){ return "list" }
    }
  })
  .when('/clientes/new',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/new.html',
    resolve: {
      type: function(){ return "new" }
    }
  })
  .when('/clientes/:id/edit',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/edit.html',
    resolve: {
      type: function(){ return "edit" }
    }
  })
  .otherwise({
    redirectTo:'/'
  });

} ]);
