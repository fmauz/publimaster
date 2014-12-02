publimasterApp.controller('JornaisCtrl', [ "$scope", "$routeParams", "$location", "NavBarService", "type", "Jornal", "State", function($scope, $routeParams, $location, NavBarService, type, Jornal, State){
  NavBarService.setMenu( "jornais" );
  $scope.show_info = true;
  $scope.jornais = [];
  $scope.pagination = { perPage:0, totalItems: 0, currentPage: parseInt($routeParams.page) || 1 , maxSize: 7 };

  $scope.jornal = new Jornal();

  $scope.has_error = function(){
    for (var i = arguments.length - 1; i >= 0; i--) {
      if ( $scope.data_error.hasOwnProperty(arguments[i]) ){
        return true;
      }
    };
    return false;
  }

  $scope.pageChanged = function() {
    $location.path("/jornais/page/" + $scope.pagination.currentPage );
  };

  $scope.destroy = function( resource ){
    if( confirm("Deseja apagar o registro ?") ){
      resource.delete().then(function(){
        $scope.jornais.splice( $scope.jornais.indexOf(resource), 1 ); 
        if( $scope.jornais.length == 0 ){ $location.path("/jornais"); }
      });
    }
  }

  $scope.update = function(){
    $scope.jornal.update().then(function(){
      $location.path("/jornais");
    });
  }

  $scope.create = function(){
    $scope.jornal.create().then(function(){
      $location.path("/jornais");
    }, function(response){
      $scope.data_error = response.data;
    });
  }

  $scope.changeNode = function(list, object, id){
    var item = _.findWhere( list, { id: id });
    angular.extend( object, item );
  }


  switch( type ){
    case "list":
      Jornal.query({page: $scope.pagination.currentPage}).then(function( results ){
         $scope.jornais = results.items;

         $scope.pagination.totalItems = results.pagination.totalItems;
         $scope.pagination.currentPage = results.pagination.currentPage;
         $scope.pagination.perPage = results.pagination.perPage;

         $scope.show_info=true;
       });
      break;

    case "new":
    case "edit":
      State.query().then(function(results){
        $scope.states = results;
      });
      
    case "show":
      if( $routeParams.id != undefined ){
        Jornal.get( $routeParams.id ).then(function(result){
          $scope.jornal = result;
        });
      }
      break;
    default:
      $location.path("/jornais");
      break;
  }

}])