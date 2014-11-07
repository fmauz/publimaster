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
  $scope.data_error = {};

  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
  $scope.show_info = false;

  $scope.has_error = function(){
    for (var i = arguments.length - 1; i >= 0; i--) {
      if ( $scope.data_error.hasOwnProperty(arguments[i]) ){
        return true;
      }
    };
    return false;
  }

  $scope.pageChanged = function() {
    $location.path("/clientes/page/" + $scope.pagination.currentPage );
  };


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
    }, function(response){
      $scope.data_error = response.data;
    });
  }

  $scope.changeNode = function(list, object, id){
    var item = _.findWhere( list, { id: id });
    angular.extend( object, item );
  }


  switch( type ){
    case "list":
      Client.query({page: $scope.pagination.currentPage}).then(function( results ){
         $scope.clients = results.items;

         $scope.pagination.totalItems = results.pagination.totalItems;
         $scope.pagination.currentPage = results.pagination.currentPage;
         $scope.pagination.perPage = results.pagination.perPage;

         $scope.show_info=true;
       });
      break;

    case "new":
    case "edit":
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
      
    case "show":
      if( $routeParams.id != undefined ){
        Client.get( $routeParams.id ).then(function(result){
          $scope.client = result;
        });
      }
      break;
    default:
      $location.path("/clientes");
      break;
  }

  
}]);