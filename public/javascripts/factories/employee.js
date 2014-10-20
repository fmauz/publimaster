publimasterApp.factory( 'Employee', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/employees",
    name: "employee"
  })
}]);