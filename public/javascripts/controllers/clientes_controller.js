publimasterApp.controller('ClientesCtrl', [ "$scope", "$routeParams", "Client", "StreetSuffix", "ClientType", "Segment", "Employee", "State", function($scope, $routeParams, Client, StreetSuffix, ClientType, Segment, Employee, State) {
	$scope.menu_active = "clientes";

	$scope.clients = [];
	$scope.client = {};

  $scope.client_types = [];
  $scope.street_suffixes = [];
  $scope.segments = [];
  $scope.employees = [];
  $scope.states = [];

  $scope.update = function(){
    $scope.client.update();
  }

  $scope.changeNode = function(list, object, id){
    var item = _.findWhere( list, { id: id });
    angular.extend( object, item );
  }

  if( $routeParams.id == undefined ){
    Client.query({}).then(function( results ){
     $scope.clients = results;
   });
  }else{

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

    Client.get( $routeParams.id ).then(function(result){
      $scope.client = result;
    });
  }

}]);