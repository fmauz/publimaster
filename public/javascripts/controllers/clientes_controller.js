publimasterApp.controller('ClientesCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "Client", "StreetSuffix", "ClientType", "Segment", "Employee", "State", "type", function($scope, $routeParams, $location, NavBarService, Client, StreetSuffix, ClientType, Segment, Employee, State, type) {
	NavBarService.setMenu( "clientes" );

	$scope.clients = [];
	$scope.client = new Client({
                    "clientType": {},
                    "segment": {},
                    "employee": {},
                    "address": { 
                      "streetSuffix": {},
                      "contactPhones": [{}], 
                      "contactEmails": [{}],
                      "city": {}, 
                      "state": { "cities": [] }
                    }
                  });

  $scope.client_types = [];
  $scope.street_suffixes = [];
  $scope.segments = [];
  $scope.employees = [];
  $scope.states = [];

  $scope.destroy = function( resource ){
    if( confirm("Deseja apagar o registro ?") ){
      resource.delete().then(function(){
        $scope.clients.splice( $scope.clients.indexOf(resource), 1 ); 
        if( $scope.clients.length == 0 ){ $location.path("/clientes"); }
      });
    }
  }

  $scope.update = function(){
    $scope.client.update().then(function(){
      $location.path("/clientes");
    });
  }

  $scope.create = function(){
    $scope.client.create().then(function(){
      $location.path("/clientes");
    });
  }

  $scope.changeNode = function(list, object, id){
    var item = _.findWhere( list, { id: id });
    angular.extend( object, item );
  }

  switch( type ){
    case "list":
      Client.query({}).then(function( results ){
       $scope.clients = results;
     });
      break;
    case "new":
    case "edit":
      console.log( $routeParams.id )
      if( $routeParams.id != undefined ){
        Client.get( $routeParams.id ).then(function(result){
          $scope.client = result;
        });
      }

      State.query().then(function(results){
        $scope.states = results;
      });

      Employee.query().then(function(results){
        $scope.employees = results;
      });

      Segment.query().then(function(results){
        $scope.segments = results;
      })

      StreetSuffix.query().then(function(results){
        $scope.street_suffixes = results;
      });

      ClientType.query().then(function(results){
        $scope.client_types = results;
      });

      break;
    default:
      $location.path("/clientes");
      break;

  }

  
}]);