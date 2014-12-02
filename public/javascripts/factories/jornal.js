publimasterApp.factory( 'Jornal', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var jornalFactory = railsResourceFactory({
    url: "/jornals",
    name: "jornal"
  });
  jornalFactory.addInterceptor( httpIndicatorInterceptor );
  jornalFactory.addInterceptor( paginationInterceptor );
  return jornalFactory;
}]);