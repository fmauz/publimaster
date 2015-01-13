publimasterApp.factory( 'ClientType', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory){
  var clientTypeFactory = railsResourceFactory({
    url: "/client_types",
    name: "client_type"
  });
  clientTypeFactory.addInterceptor( httpIndicatorInterceptor );
  clientTypeFactory.addInterceptor( paginationInterceptor );
  return clientTypeFactory;
}]);
