publimasterApp.factory( 'Publicacao', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var publicaoFactory = railsResourceFactory({
    url: "/publicacaos",
    name: "publicacao"
  });
  publicaoFactory.addInterceptor( httpIndicatorInterceptor );
  publicaoFactory.addInterceptor( paginationInterceptor );
  return publicaoFactory;
}]);
