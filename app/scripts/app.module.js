(function () {
    angular
        .module('couchBlogApp', [
            'ngAnimate',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngComponentRouter',
            'ngSanitize',
            'ngTouch',
            'couchBlogApp.home',
            'couchBlogApp.navbar',
        ])
        .config(['$httpProvider', function ($httpProvider) {
            //Reset headers to avoid OPTIONS request (aka preflight)
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        }])
        .value('$routerRootComponent', 'couchApp');
})();
