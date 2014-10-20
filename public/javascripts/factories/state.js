publimasterApp.factory( 'State', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/states",
    name: "state"
  })
}]);