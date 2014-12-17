publimasterApp.controller('RetrancasCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Retranca", "Crud", function($scope, $routeParams, $location, NavBarService, type, Retranca, Crud){
  NavBarService.setMenu( "retrancas" );

  Crud.init( $scope, $routeParams, $location, "retrancas", Retranca );

  switch( type ){
    case "list":
      $scope.list();
      break;

    case "new":
    case "edit":
    case "show":
      $scope.findByParamId();
      break;
    default:
      $location.path("/retrancas");
      break;
  }
}])