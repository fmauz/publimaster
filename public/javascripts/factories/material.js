publimasterApp.factory( 'Material', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var materialFactory = railsResourceFactory({
    url: "/materials",
    name: "material"
  });
  materialFactory.addInterceptor( httpIndicatorInterceptor );
  materialFactory.addInterceptor( paginationInterceptor );
  return materialFactory;
}]);