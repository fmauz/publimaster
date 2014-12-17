publimasterApp.factory( 'Retranca', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var retrancaFactory = railsResourceFactory({
    url: "/retrancas",
    name: "retranca"
  });
  retrancaFactory.addInterceptor( httpIndicatorInterceptor );
  retrancaFactory.addInterceptor( paginationInterceptor );
  return retrancaFactory;
}]);