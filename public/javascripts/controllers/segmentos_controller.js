publimasterApp.controller('SegmentosCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", function($scope, $routeParams, $location, NavBarService, type){
  NavBarService.setMenu( "segmentos" );
  $scope.show_info = true;
  $scope.segmentos = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };
}])