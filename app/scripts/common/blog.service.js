(function () {
    angular
        .module('couchBlogApp.common')
        .factory('BlogService', BlogService);

    BlogService.$inject = ['$resource'];

    function BlogService($resource) {
        var BLOG_SERVICE_API = 'http://localhost:5984/couch-blog/:id';

        return $resource(BLOG_SERVICE_API, {}, {
            query: {method: 'GET', isArray: true},
            get: {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                },
            },
            save: {
              method: 'POST',
              transformResponse: function (data) {
                data = angular.fromJson(data);
                return data;
              },
              headers: {
                'Content-Type': 'application/json'
              },
            },
            update: {
              method: 'PUT',
              transformResponse: function (data) {
                data = angular.fromJson(data);
                return data;
              },
              headers: {
                'Content-Type': 'application/json'
              },
            },
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
