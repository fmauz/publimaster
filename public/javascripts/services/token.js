publimasterApp.factory('tokenInterceptor', ["$cookies", function($cookies) {
  var pagination = {}
  return {
    'beforeRequest': function( httpConfig, resourceConstructor, context ){
      httpConfig.params["authenticity_token"] = $cookies.token;
      return httpConfig;
    }
  };
}]);
