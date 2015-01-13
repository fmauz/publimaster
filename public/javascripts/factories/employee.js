publimasterApp.factory( 'Employee', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor" , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor){
  var employeeFactory = railsResourceFactory({
    url: "/employees",
    name: "employee"
  });
  employeeFactory.addInterceptor( httpIndicatorInterceptor );
  employeeFactory.addInterceptor( paginationInterceptor );
  return employeeFactory;
}]);
