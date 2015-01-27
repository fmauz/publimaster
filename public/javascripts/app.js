var publimasterApp = angular.module( "publimasterApp", ["ngRoute", "ui.utils", "ui.bootstrap", "rails", "Devise", "ngCookies"] );

function resource( $routeProvider, resource_name, controller_name ){
  var router = '/' + resource_name;
  $routeProvider.when(router,{
      controller: controller_name,
      templateUrl: '/views/'+ resource_name + '/list.html',
      resolve: {
        type: function(){ return "list"; }
      }
    })
    .when(router+'/page/:page',{
      controller: controller_name,
      templateUrl: '/views/'+ resource_name + '/list.html',
      resolve: {
        type: function(){ return "list"; }
      }
    })
    .when(router+'/new',{
      controller: controller_name,
      templateUrl: '/views/'+ resource_name + '/new.html',
      resolve: {
        type: function(){ return "new" }
      }
    })
    .when(router+'/:id/edit',{
      controller: controller_name,
      templateUrl: '/views/'+ resource_name + '/edit.html',
      resolve: {
        type: function(){ return "edit" }
      }
    })
    .when(router+'/:id',{
      controller: controller_name,
      templateUrl: '/views/'+ resource_name + '/show.html',
      resolve: {
        type: function(){ return "show" }
      }
    });
}

publimasterApp.config([ '$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    controller:'DashboardCtrl',
    templateUrl:'/app.html'
  })
  .when('/users/login', {
    controller: 'AuthController',
    templateUrl: '/views/sessions/login.html'
  })

  // RESOURCES: usuarios
  resource( $routeProvider, 'usuarios', 'UsuariosCtrl' );

  // RESOURCES: tipos_de_clientes
  resource( $routeProvider, 'tipos_de_clientes', 'TiposDeClientesCtrl' );

  // RESOURCES: logradouros
  resource( $routeProvider, 'logradouros', 'LogradourosCtrl' );

  // RESOURCES: retrancas
  resource( $routeProvider, 'retrancas', 'RetrancasCtrl' );

  // RESOURCES: publicacoes
  resource( $routeProvider, 'publicacaos', 'PublicacoesCtrl' );

  // RESOURCES: segmentos
  resource( $routeProvider, 'segmentos', 'SegmentosCtrl' );

  // RESOURCES: materiais
  resource( $routeProvider, 'materiais', 'MateriaisCtrl' );

  // RESOURCES: diarios oficiais
  resource( $routeProvider, 'diarios_oficiais', 'DiariosOficiaisCtrl' );

  // RESOURCES: jornais
  resource( $routeProvider, 'jornais', 'JornaisCtrl' );

  // RESOURCES: funcionarios
  resource( $routeProvider, 'funcionarios', 'FuncionariosCtrl' );

  // RESOURCES: clientes
  resource( $routeProvider, 'clientes', 'ClientesCtrl' );

  // OTHERWISE
  $routeProvider.otherwise({
    redirectTo:'/'
  });


} ]);

publimasterApp.filter('range', function() {
  return function(val, range) {
    range = parseInt(range);
    for (var i=0; i<range; i++)
      val.push(i);
      return val;
    };
});

publimasterApp.config([ "AuthProvider", "AuthInterceptProvider", function(AuthProvider, AuthInterceptProvider) {
  AuthInterceptProvider.interceptAuth(true);
}]);
