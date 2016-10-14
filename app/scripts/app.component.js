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
            ],
        });
})();