publimasterApp.factory( 'DiarioOficial', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var diarioOficialFactory = railsResourceFactory({
    url: "/diario_oficials",
    name: "diario_oficial"
  });
  diarioOficialFactory.addInterceptor( httpIndicatorInterceptor );
  diarioOficialFactory.addInterceptor( paginationInterceptor );
  return diarioOficialFactory;
}]);