(function () {
    angular
        .module('couchBlogApp.home')
        .factory('PostsService', PostsService);

    PostsService.$inject = ['$resource'];

    function PostsService($resource) {
        var POSTS_SERVICE_API = 'http://127.0.0.1:5984/couch-blog/_design/docs/_view/_all_posts';

        return $resource(POSTS_SERVICE_API);
    }
})();
