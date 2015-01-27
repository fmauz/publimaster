publimasterApp.factory( 'Client', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", "tokenInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
	var clientFactory = railsResourceFactory({
		url: "/clients",
		name: "client"
	});
  clientFactory.addInterceptor( httpIndicatorInterceptor );
  clientFactory.addInterceptor( paginationInterceptor );
	clientFactory.addInterceptor( tokenInterceptor );
  return clientFactory;
}]);
