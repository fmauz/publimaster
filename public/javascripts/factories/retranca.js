publimasterApp.factory( 'Retranca', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var retrancaFactory = railsResourceFactory({
    url: "/retrancas",
    name: "retranca"
  });
  retrancaFactory.addInterceptor( httpIndicatorInterceptor );
  retrancaFactory.addInterceptor( paginationInterceptor );
  retrancaFactory.addInterceptor( tokenInterceptor );


  return retrancaFactory;
}]);
