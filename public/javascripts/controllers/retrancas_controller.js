publimasterApp.controller('RetrancasCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "retrancas" );
  $scope.show_info = true;
  $scope.retrancas = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
}])