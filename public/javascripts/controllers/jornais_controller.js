publimasterApp.controller('JornaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Jornal", "State", "Publicacao", "Crud", function($scope, $routeParams, $location, NavBarService, type, Jornal, State, Publicacao, Crud){
  NavBarService.setMenu( "jornais" );


  Crud.init( $scope, $routeParams, $location, "jornais", Jornal );
  $scope.model = new Jornal({
    "contactPhones": [{}],
    "contactEmails": [{}]
  });

  $scope.clients = [];

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
      Publicacao.query({ jornal_id: $routeParams.id, group: "client" }).then(function(results){
        $scope.clients = results;
      });

      $scope.findByParamId();
      break;
    default:
      $location.path("/jornais");
      break;
  }

}])
