publimasterApp.factory( 'Segment', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/segments",
    name: "segment",
    pluralName: "segments"
  })
}]);