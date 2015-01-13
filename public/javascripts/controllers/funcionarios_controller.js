publimasterApp.controller('FuncionariosCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Employee", "Crud", "State", "StreetSuffix", "Role", function($scope, $routeParams, $location, NavBarService, type, Employee, Crud, State, StreetSuffix, Role){
  NavBarService.setMenu( "funcionarios" );
  Crud.init( $scope, $routeParams, $location, "funcionarios", Employee );

  $scope.model = new Employee({
      "address": {
      "streetSuffix": {},
      "contactPhones": [{}],
      "contactEmails": [{}],
      "city": {},
      "state": { "cities": [] },
      "user": {}
    }
  });

  $scope.open1 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened1 = true;
    $scope.opened2 = false;
  };

  $scope.open2 = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened1 = false;
    $scope.opened2 = true;
  };

  switch( type ){
    case "list":
      $scope.list();
      break;

      case "new":
        case "edit":
          State.query().then(function(results){
            $scope.states = results;
          });

          StreetSuffix.query().then(function(results){
            $scope.street_suffixes = results;
          });

          Role.query().then(function(results){
            $scope.roles = results;
          });

          case "show":
            $scope.findByParamId();
            break;
            default:
              $location.path("/funcionarios");
              break;
            }

}])
