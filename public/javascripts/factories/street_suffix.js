publimasterApp.factory( 'StreetSuffix', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory){
  var streetSuffixFactory = railsResourceFactory({
    url: "/street_suffixes",
    name: "street_suffix",
    pluralName: "street_suffixes"
  });
  streetSuffixFactory.addInterceptor( httpIndicatorInterceptor );
  streetSuffixFactory.addInterceptor( paginationInterceptor );
  return streetSuffixFactory;
}]);
