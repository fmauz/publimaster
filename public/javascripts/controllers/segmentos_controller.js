publimasterApp.controller('SegmentosCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Segment", "Crud", function($scope, $routeParams, $location, NavBarService, type, Segment, Crud){
  NavBarService.setMenu( "segmentos" );

  Crud.init( $scope, $routeParams, $location, "segmentos", Segment );

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
      $location.path("/segmentos");
      break;
  }
}])