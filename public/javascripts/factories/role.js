publimasterApp.factory( 'Role', ["railsResourceFactory", "tokenInterceptor",function(railsResourceFactory, tokenInterceptor){
  return railsResourceFactory({
    url: "/roles",
    name: "role"
  })
}]);
