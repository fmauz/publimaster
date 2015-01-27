publimasterApp.factory( 'Segment', ["httpIndicatorInterceptor", "paginationInterceptor", "railsResourceFactory", "tokenInterceptor", function(httpIndicatorInterceptor,paginationInterceptor,railsResourceFactory, tokenInterceptor){
  var segmentFactory = railsResourceFactory({
    url: "/segments",
    name: "segment"
  });
  segmentFactory.addInterceptor( httpIndicatorInterceptor );
  segmentFactory.addInterceptor( paginationInterceptor );
  segmentFactory.addInterceptor( tokenInterceptor );

  return segmentFactory;
}]);
