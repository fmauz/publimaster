publimasterApp.controller('JornaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Jornal", "State", "Crud", function($scope, $routeParams, $location, NavBarService, type, Jornal, State, Crud){
  NavBarService.setMenu( "jornais" );

  Crud.init( $scope, $routeParams, $location, "jornais", Jornal );

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
      $location.path("/jornais");
      break;
  }

}])