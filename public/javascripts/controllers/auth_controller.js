publimasterApp.controller('AuthController', ["$scope", "Auth", "$location", "$cookies", function($scope, Auth, $location, $cookies) {
  $scope.error = { has: false, message: "Email ou senha inválido. Tente novamente" }

  $scope.login = function(){
    console.log( "Iniciando o Login")
    Auth.login($scope.model).then(function(user) {
      $cookies.token = user.token;
      $scope.isAuthenticated = Auth.isAuthenticated();
      $location.path("/")
    }, function(error) {
      $scope.error.has = true;
    });
  }

}]);
