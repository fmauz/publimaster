publimasterApp.factory('paginationInterceptor', function () {
    var pagination = {}
    return {
        'response': function( result ){
            if( result.headers( "X-Pagination-totalItems" ) && 
                result.headers( "X-Pagination-PerPage" ) && 
                result.headers( "X-Pagination-CurrentPage" ) && 
                result.headers( "X-Pagination-TotalPages" )
              ){
                pagination = {
                    totalItems: parseInt(result.headers( "X-Pagination-totalItems" )),
                    perPage: parseInt(result.headers( "X-Pagination-PerPage" )),
                    currentPage: parseInt(result.headers( "X-Pagination-CurrentPage" )),
                    totalPages: parseInt(result.headers( "X-Pagination-TotalPages" ))
                }
            }else{
                pagination = {}
            }
            return result;
        },
        'afterResponse': function (result, resourceConstructor, context) {
            if( $.isEmptyObject( pagination ) ){
                return result;
            }
            else{
                return { items: result, pagination: pagination };
            }
        }
    };
});