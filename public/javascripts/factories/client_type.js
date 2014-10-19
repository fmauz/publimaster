publimasterApp.factory( 'ClientType', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/client_types",
    name: "client_type"
  })
}]);