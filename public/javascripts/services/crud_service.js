publimasterApp.factory('Crud', function () {
    var crudObject = {};

    crudObject["init"] = function( $scope, $routeParams, $location, resourceName, object ){
        crudObject["$scope"] = $scope;
        crudObject["$routeParams"] = $routeParams;
        crudObject["$location"] = $location;
        crudObject["resourceName"] = resourceName;
        crudObject["object"] = object;
        crudObject["model"] = new crudObject.object();
        crudObject["data_error"] = {};

        crudObject.$scope["collection"] = [];
        crudObject.$scope["finishLoad"] = false;
        crudObject.$scope["pagination"] = { perPage:0, totalItems: 0, currentPage: parseInt(crudObject.$routeParams.page)||1 , maxSize: 7 };
        
        crudObject.$scope["list"] = crudObject.list;
        crudObject.$scope["has_error"] = crudObject.has_error;

        crudObject.$scope["destroy"] = crudObject.destroy;
        crudObject.$scope["create"] = crudObject.create;
        crudObject.$scope["model"] = crudObject.model;
        crudObject.$scope["changeNode"] = crudObject.changeNode;
        crudObject.$scope["update"] = crudObject.update;
        crudObject.$scope["findByParamId"] = crudObject.findByParamId;
        crudObject.$scope["pagination"]["pageChanged"] = crudObject.pageChanged;

        crudObject.$scope["new_object_path"] = "#/" + crudObject.resourceName + "/new";
        
        crudObject.$scope["edit_object_path"] = function(object){
            return "#/"+ crudObject.resourceName + "/" + object.id + "/edit";
        }
        crudObject.$scope["show_object_path"] = function(object){
            return "#/"+ crudObject.resourceName + "/" + object.id;
        }


        return crudObject;
    }

    crudObject["pageChanged"] = function(){
        crudObject.$location.path("/"+ crudObject.resourceName +"/page/" + crudObject.$scope.pagination.currentPage );
    };

    crudObject["changeNode"] = function(list, object, id){
        if(object==undefined) object = {};
        var item = _.findWhere( list, { id: id });
        angular.extend( object, item );
    }

    crudObject["destroy"] = function( resource ){
        if( confirm("Deseja apagar o registro ?") ){
          resource.delete().then(function(){
            crudObject.$scope.collection.splice( crudObject.$scope.collection.indexOf(resource), 1 ); 
            if( crudObject.$scope.collection.length == 0 ){ crudObject.$location.path("/"+crudObject.resourceName); }
          });
        }
    }

    crudObject["create"] = function(){
        crudObject.$scope.model.create().then(function(){
          crudObject.$location.path("/"+crudObject.resourceName);
        }, function(response){
          crudObject["data_error"] = response.data;
        });
    }

    crudObject["update"] = function(){
        crudObject.$scope.model.update().then(function(){
          crudObject.$location.path("/"+crudObject.resourceName);
        });
    }

    crudObject["list"] = function(){
        return crudObject.object.query({page: crudObject.$scope.pagination.currentPage}).then(function(results){
            console.log( results )
            crudObject.$scope.collection = results.items;
            crudObject.$scope.pagination.totalItems = results.pagination.totalItems;
            crudObject.$scope.pagination.currentPage = results.pagination.currentPage;
            crudObject.$scope.pagination.perPage = results.pagination.perPage;
            crudObject.$scope.finishLoad = true;
        });
    }

    crudObject["findByParamId"] = function(){
        if( crudObject.$routeParams.id != undefined ){
          return crudObject.object.get( crudObject.$routeParams.id ).then(function(result){
            crudObject.$scope.model = result;
          });
        }
    }
    
    crudObject["has_error"] = function(){
        for (var i = arguments.length - 1; i >= 0; i--) 
            if ( crudObject["data_error"].hasOwnProperty(arguments[i]) )
                return true;
        return false;
    }

    return crudObject;
});