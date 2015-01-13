publimasterApp.controller('PublicacoesCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Material", "Client", "Jornal", "DiarioOficial", "Publicacao", "Crud", function($scope, $routeParams, $location, NavBarService, type, Material, Client, Jornal, DiarioOficial, Publicacao, Crud){
  NavBarService.setMenu( "publicacaos" );

  Crud.init( $scope, $routeParams, $location, "publicacaos", Publicacao );

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.calculateTotal = function(){
    $scope.model.totalJornal = $scope.model.heightJornal * $scope.model.colunaJornal;
  }

  switch( type ){
    case "list":
      $scope.list();
      break;

      case "new":
        case "edit":
          Material.query().then(function(results){
            $scope.materials = results;
          });

          Client.query().then(function(results){
            $scope.clients = results;
          });

          Jornal.query().then(function(results){
            $scope.jornals = results;
          });

          DiarioOficial.query().then(function(results){
            $scope.diario_oficials = results;
          });

          case "show":
            $scope.findByParamId();
            break;
            default:
              $location.path("/publicacaos");
              break;
            }

}])
