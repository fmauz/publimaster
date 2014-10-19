publimasterApp.factory( 'StreetSuffix', ["railsResourceFactory",function(railsResourceFactory){
  return railsResourceFactory({
    url: "/street_suffixes",
    name: "street_suffix",
    pluralName: "street_suffixes"
  })
}]);