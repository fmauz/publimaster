publimasterApp.factory( 'DiarioOficial', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var diarioOficialFactory = railsResourceFactory({
    url: "/diario_oficials",
    name: "diario_oficial"
  });
  diarioOficialFactory.addInterceptor( httpIndicatorInterceptor );
  diarioOficialFactory.addInterceptor( paginationInterceptor );
  diarioOficialFactory.addInterceptor( tokenInterceptor );

  return diarioOficialFactory;
}]);
