(function () {
    angular
        .module('couchBlogApp.home')
        .factory('BlogService', BlogService);

    BlogService.$inject = ['$resource'];

    function BlogService($resource) {
        var BLOG_SERVICE_API = 'http://localhost:5984/couch-blog/:id';

        return $resource(BLOG_SERVICE_API, {}, {
            // query: {method: 'GET', isArray: true},
            // get: {
            //     method: 'GET',
            //     transformResponse: function (data) {
            //         data = angular.fromJson(data);
            //         return data;
            //     },
            // },
            // save: {method: 'POST'},
            // update: {method: 'PUT'},
            delete: {
                method: 'DELETE',
                params: {
                    id: '@id',
                    rev: '@rev'
                }
            },
        });
    }
})();