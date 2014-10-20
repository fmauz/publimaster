publimasterApp.factory( 'NavBarService', ["railsResourceFactory",function(railsResourceFactory){
  var current_menu = {
    active: "dashboard",
    is: function(name){
        return current_menu.active == name;
      }
    };

  return {
    setMenu: function( name ){
      current_menu.active = name;
    },
    currentMenu: function(){
      return current_menu;
    }
  }
}]);