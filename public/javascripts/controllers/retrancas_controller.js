publimasterApp.controller('RetrancasCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Retranca", "Jornal", "Crud", function($scope, $routeParams, $location, NavBarService, type, Retranca, Jornal, Crud){
  NavBarService.setMenu( "retrancas" );

  Crud.init( $scope, $routeParams, $location, "retrancas", Retranca );

  Jornal.get( $routeParams.jornal_id ).then(function( result ){
      $scope.jornal = result;
      $scope.model.jornalId = $scope.jornal.id;
  });

  $scope.buildColumn = function(){
    for( var i = 1; i<= $scope.model.columnCount; i++){
      // $scope.model.columnCountArray.push( i );
    }
  }

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
