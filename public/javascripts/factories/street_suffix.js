publimasterApp.factory( 'StreetSuffix', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", "tokenInterceptor", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory,tokenInterceptor){
  var streetSuffixFactory = railsResourceFactory({
    url: "/street_suffixes",
    name: "street_suffix",
    pluralName: "street_suffixes"
  });
  streetSuffixFactory.addInterceptor( httpIndicatorInterceptor );
  streetSuffixFactory.addInterceptor( paginationInterceptor );
  streetSuffixFactory.addInterceptor( tokenInterceptor );

  return streetSuffixFactory;
}]);
