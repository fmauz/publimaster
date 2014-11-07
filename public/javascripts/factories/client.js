publimasterApp.factory( 'Client', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
	var clientFactory = railsResourceFactory({
		url: "/clients",
		name: "client"
	});
  clientFactory.addInterceptor( httpIndicatorInterceptor );
  clientFactory.addInterceptor( paginationInterceptor );
  return clientFactory;
}]);