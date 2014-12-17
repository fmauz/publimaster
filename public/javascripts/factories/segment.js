publimasterApp.factory( 'Segment', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory){
  var segmentFactory = railsResourceFactory({
    url: "/segments",
    name: "segment"
  });
  segmentFactory.addInterceptor( httpIndicatorInterceptor );
  segmentFactory.addInterceptor( paginationInterceptor );
  return segmentFactory;
}]);