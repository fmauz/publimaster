publimasterApp.factory( 'Jornal', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var jornalFactory = railsResourceFactory({
    url: "/jornals",
    name: "jornal"
  });
  jornalFactory.addInterceptor( httpIndicatorInterceptor );
  jornalFactory.addInterceptor( paginationInterceptor );
  jornalFactory.addInterceptor( tokenInterceptor );
  
  return jornalFactory;
}]);
