publimasterApp.controller('TiposDeClientesCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "tipos_de_clientes" );
}])