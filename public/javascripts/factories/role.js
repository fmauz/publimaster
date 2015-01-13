publimasterApp.factory( 'Role', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/roles",
    name: "role"
  })
}]);
