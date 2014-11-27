publimasterApp.controller('JornaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "jornais" );
  $scope.show_info = true;
  $scope.jornais = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
}])