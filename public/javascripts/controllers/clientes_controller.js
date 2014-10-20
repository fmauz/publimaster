publimasterApp.controller('ClientesCtrl', [ "$scope", "$routeParams", "Client", "StreetSuffix", "ClientType", "Segment", "Employee", function($scope, $routeParams, Client, StreetSuffix, ClientType, Segment, Employee) {
	$scope.menu_active = "clientes";

	$scope.clients = [];
	$scope.client = {};

  $scope.client_types = [];
  $scope.street_suffixes = [];
  $scope.segments = [];
  $scope.employees = [];

  if( $routeParams.id == undefined ){
    Client.query({}).then(function( results ){
     $scope.clients = results;
   });
  }else{

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