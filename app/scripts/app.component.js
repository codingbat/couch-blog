(function () {
  angular.module('couchBlogApp')
    .component('couchApp', {
      templateUrl: 'scripts/app.html',
      $routeConfig: [
        {
          path: '/',
          name: 'Home',
          component: 'home',
          useAsDefault: true,
        },
        {
          path: '/create',
          name: 'Post',
          component: 'addNewPost',
        },
        {
          path: '/comment',
          name: 'Comment',
          component: 'addNewComment',
        },
        {
          path: '/mapreduce',
          name: 'MapReduce',
          component: 'reducedAuthors',
        },
      ],
    });
})();
