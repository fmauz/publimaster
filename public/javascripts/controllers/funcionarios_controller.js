publimasterApp.controller('FuncionariosCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "funcionarios" );
  $scope.show_info = true;
  $scope.funcionarios = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
}])