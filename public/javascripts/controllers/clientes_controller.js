publimasterApp.controller('ClientesCtrl', [ "$scope", "$routeParams", "Client", "StreetSuffix", function($scope, $routeParams, Client, StreetSuffix) {
	$scope.menu_active = "clientes";

	$scope.clients = [];
	$scope.client = {};


	if( $routeParams.id == undefined ){
		Client.query({}).then(function( results ){
			$scope.clients = results;
		});
	}else{
    $scope.client_types = [];
    $scope.street_suffixes = [];

    StreetSuffix.query().then(function(results){
      $scope.street_suffixes = results["streetSuffixes"];
    });

    Client.get( $routeParams.id ).then(function(result){
      $scope.client = result;
    });
  }

}]);