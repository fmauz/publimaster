publimasterApp.controller('ClientesCtrl', [ "$scope", "Client", function($scope, Client) {
  $scope.menu_active = "clientes";

  $scope.clients = [];

  Client.query({}).then(function( results ){
  	$scope.clients = results;
  });
  
}]);