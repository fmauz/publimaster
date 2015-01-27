publimasterApp.factory( 'Employee', ["railsResourceFactory", "httpIndicatorInterceptor", "paginationInterceptor", 'tokenInterceptor' , function(railsResourceFactory, httpIndicatorInterceptor, paginationInterceptor, tokenInterceptor){
  var employeeFactory = railsResourceFactory({
    url: "/employees",
    name: "employee"
  });
  employeeFactory.addInterceptor( httpIndicatorInterceptor );
  employeeFactory.addInterceptor( paginationInterceptor );
  employeeFactory.addInterceptor( tokenInterceptor );
  
  return employeeFactory;
}]);
