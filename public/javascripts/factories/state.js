publimasterApp.factory( 'State', ["railsResourceFactory", "tokenInterceptor",function(railsResourceFactory, tokenInterceptor){
  return railsResourceFactory({
    url: "/states",
    name: "state"
  })
}]);
