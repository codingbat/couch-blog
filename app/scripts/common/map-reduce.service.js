(function () {
  angular.module('couchBlogApp.common')
    .factory('ReducerService', ReducerService);

  ReducerService.$inject = ['$resource'];

  function ReducerService($resource) {
    var REDUCER_SERVICE_API = 'http://34.251.121.181:5984/couch-blog/_design/authors/_view/total_blog_posts';

    return $resource(REDUCER_SERVICE_API, {}, {
      get: {
        method: 'GET',
        params: {
          group: '@group',
        },
        transformResponse: function (data) {
          data = angular.fromJson(data);
          return data;
        },
      }
    });
  }
})();
