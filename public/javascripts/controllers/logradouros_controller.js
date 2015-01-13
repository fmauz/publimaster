publimasterApp.controller('LogradourosCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "StreetSuffix", "Crud", "type", function($scope, $routeParams, $location, NavBarService, StreetSuffix, Crud, type){
  NavBarService.setMenu( "logradouros" );

  Crud.init( $scope, $routeParams, $location, "logradouros", StreetSuffix );

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
              $location.path("/logradouros");
              break;
            }
}])
