publimasterApp.directive( 'sidebar', function(){
  return {
    restrict: 'A',
    templateUrl: "/partials/side.html",
    link: function(scope, element, attrs){
      public_vars.$sidebarMenu = $(element);
      public_vars.$mainMenu = public_vars.$sidebarMenu.find('.main-menu');

      if(public_vars.$sidebarMenu.hasClass('fixed'))
        ps_init();

      setup_sidebar_menu();
    }
  };
} )