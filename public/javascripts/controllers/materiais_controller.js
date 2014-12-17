publimasterApp.controller('MateriaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Material", "Crud", function($scope, $routeParams, $location, NavBarService, type, Material, Crud){
  NavBarService.setMenu( "materiais" );

  Crud.init( $scope, $routeParams, $location, "materiais", Material );

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
      $location.path("/materiais");
      break;
  }

}])