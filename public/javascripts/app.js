var publimasterApp = angular.module( "publimasterApp", ["ngRoute", "ui.utils", "ui.bootstrap", "rails"] );

publimasterApp.config([ '$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    controller:'DashboardCtrl',
    templateUrl:'/app.html'
  })
  .when('/users/login', {
    controller: 'UsersCtrl',
    templateUrl: '/users/login.html'
  })
  // RESOURCES: clientes
  .when('/clientes',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/list.html',
    resolve: {
      type: function(){ return "list"; }
    }
  })
  .when('/clientes/page/:page',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/list.html',
    resolve: {
      type: function(){ return "list"; }
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
  .when('/clientes/:id',{
    controller: 'ClientesCtrl',
    templateUrl: '/views/clientes/show.html',
    resolve: {
      type: function(){ return "show" }
    }
  })
  // OTHERWISE
  .otherwise({
    redirectTo:'/'
  });


} ]);