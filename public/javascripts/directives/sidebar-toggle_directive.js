publimasterApp.directive( 'sidebarToggle', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(element).on('click', function(ev){
        // ev.preventDefault();
        
        if(public_vars.$sidebarMenu.hasClass('collapsed')){
          public_vars.$sidebarMenu.removeClass('collapsed');
          ps_init();
        }
        else{
          public_vars.$sidebarMenu.addClass('collapsed');
          ps_destroy();
        }
        
        $(window).trigger('xenon.resize');
      });
    }
  };
});

publimasterApp.directive( 'sidebarToggleDropdown', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      var $scrollbar = $(element).find('.ps-scrollbar');
        $(element).on('click', '[data-toggle="dropdown"]', function(ev)
        {
          setTimeout(function()
          {
            $scrollbar.perfectScrollbar('update');
          }, 1);
        });
    }
  };
});


publimasterApp.directive( 'sidebarToggleMobileMenu', function(){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(element).on('click', function(){
        public_vars.$mainMenu.toggleClass('mobile-is-visible');
        ps_destroy();
      });
    }
  };
});

