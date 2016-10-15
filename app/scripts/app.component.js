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
          path: '/add-new-post',
          name: 'Post',
          component: 'addNewPost',
        },
      ],
    });
})();
