publimasterApp.controller('TiposDeClientesCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Crud", "ClientType", function($scope, $routeParams, $location, NavBarService, type, Crud, ClientType){
  NavBarService.setMenu( "tipos_de_clientes" );
  Crud.init( $scope, $routeParams, $location, "tipos_de_clientes", ClientType );

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
              $location.path("/tipos_de_clientes");
              break;
            }

}])
