publimasterApp.factory( 'ClientType', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", "tokenInterceptor", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory,tokenInterceptor){
  var clientTypeFactory = railsResourceFactory({
    url: "/client_types",
    name: "client_type"
  });
  clientTypeFactory.addInterceptor( httpIndicatorInterceptor );
  clientTypeFactory.addInterceptor( paginationInterceptor );
  clientTypeFactory.addInterceptor( tokenInterceptor );
  
  return clientTypeFactory;
}]);
