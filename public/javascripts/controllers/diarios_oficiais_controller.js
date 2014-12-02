publimasterApp.controller('DiariosOficiaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "DiarioOficial", "State", "Crud", function($scope, $routeParams, $location, NavBarService, type, DiarioOficial, State, Crud){
  NavBarService.setMenu( "diarios_oficiais" );

  Crud.init( $scope, $routeParams, $location, "diarios_oficiais", DiarioOficial );

  switch( type ){
    case "list":
      $scope.list();
      break;

    case "new":
    case "edit":
      State.query().then(function(results){
        $scope.states = results;
      });
      
    case "show":
      $scope.findByParamId();
      break;
    default:
      $location.path("/diarios_oficiais");
      break;
  }

}])