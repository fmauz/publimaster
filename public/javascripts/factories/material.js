publimasterApp.factory( 'Material', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var materialFactory = railsResourceFactory({
    url: "/materials",
    name: "material"
  });
  materialFactory.addInterceptor( httpIndicatorInterceptor );
  materialFactory.addInterceptor( paginationInterceptor );
  materialFactory.addInterceptor( tokenInterceptor );
  

  return materialFactory;
}]);
