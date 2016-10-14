(function () {
    angular
        .module('couchBlogApp.home')
        .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];

    function PostsService($resource) {
        var POSTS_SERVICE_API = 'http://localhost:5984/couch-blog/_all_docs?include_docs=true';

        return $resource(POSTS_SERVICE_API);
    }
})();