(function () {
  angular
    .module('couchBlogApp.mapReduce')
    .component('reducedAuthors', {
      controller: MapReduceComponent,
      controllerAs: 'vm',
      templateUrl: 'scripts/components/mapreduce/reducer.html',
    });

  MapReduceComponent.$inject = [
    'ReducerService'
  ];

  function MapReduceComponent(ReducerService) {
    var _this = this;
    _this.totalBlogPosts = totalBlogPosts;

    initialize();

    function initialize() {
      totalBlogPosts();
    }

    function totalBlogPosts() {
      ReducerService.get({group: true}, function (response) {
        _this.totalBlogPosts = response.rows;
      });
    }
  }
})();
