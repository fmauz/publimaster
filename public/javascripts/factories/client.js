publimasterApp.factory( 'Client', ["railsResourceFactory",function(railsResourceFactory){
	return railsResourceFactory({
		url: "/clients",
		name: "client"
	})
}]);