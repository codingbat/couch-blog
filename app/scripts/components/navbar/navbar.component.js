(function () {
    angular
        .module('couchBlogApp.navbar')
        .component('navbar', {
            controller: NavbarComponent,
            controllerAs: 'vm',
            templateUrl: 'scripts/components/navbar/navbar.html',
        });

    NavbarComponent.$inject = ['$location'];

    function NavbarComponent($location) {
        var _this = this;
        _this.isActive = isActive;

        function isActive(route) {
            return route === $location.url();
        }
    }
})();
