publimasterApp.controller('AppCtrl', ["$scope", "NavBarService", function($scope, NavBarService) {
  $scope.menu = NavBarService.currentMenu();
}]);