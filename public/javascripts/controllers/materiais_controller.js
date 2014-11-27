publimasterApp.controller('MateriaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "materiais" );
  $scope.show_info = true;
  $scope.materiais = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
}])