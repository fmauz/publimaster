publimasterApp.factory( 'Publicacao', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var publicaoFactory = railsResourceFactory({
    url: "/publicacaos",
    name: "publicacao"
  });
  publicaoFactory.addInterceptor( httpIndicatorInterceptor );
  publicaoFactory.addInterceptor( paginationInterceptor );
  publicaoFactory.addInterceptor( tokenInterceptor );
  

  return publicaoFactory;
}]);
