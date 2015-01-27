publimasterApp.controller('AppCtrl', ["$scope", "NavBarService", "Auth", "$location", "$cookies", function($scope, NavBarService, Auth, $location, $cookies) {
  $scope.menu = NavBarService.currentMenu();

  $scope.error = { has: false, message: "Email ou senha inválido. Tente novamente" }

  $scope.isAuthenticated = true;

  // $scope.$on('devise:login', function(event, currentUser) {
  //   $scope.isAuthenticated = Auth.isAuthenticated();
  // });
  //
  // if( !$scope.isAuthenticated ){
  //   if( $cookies.token == "null" ){
  //     $location.path("/users/login");
  //   }else{
  //     $scope.isAuthenticated = true;
  //   }
  // }
  //
  $scope.logout = function(){
  //   Auth.logout().then(function(oldUser) {
  //     $scope.isAuthenticated = Auth.isAuthenticated();
  //   }, function(error) {
  //     $scope.isAuthenticated = false;
  //   });
  //   $cookies.token = undefined;
  //   $location.path("/users/login");
  }

}]);
