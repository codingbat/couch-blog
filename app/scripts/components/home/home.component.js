(function () {
  angular
    .module('couchBlogApp.home')
    .component('home', {
      controller: CouchBlogComponent,
      controllerAs: 'vm',
      templateUrl: 'scripts/components/home/home.html',
    });

  CouchBlogComponent.$inject = [
    'PostsService',
    'BlogService',
    'commentCallBackService',
    '$rootRouter'
  ];

  function CouchBlogComponent(PostsService,
                              BlogService,
                              commentCallBackService,
                              $rootRouter) {
    var _this = this;
    _this.deleteBlogPost = deleteBlogPost;
    _this.navigateToComment = navigateToComment;
    _this.posts = [];
    _this.id = -1;
    _this.rev = -1;

    initialize();

    function initialize() {
      getBlogPosts();
    }

    function getBlogPosts() {
      PostsService.get(function (response) {
        _this.posts = response.rows;
      })
    }

    function deleteBlogPost(index, idNumber, revNumber) {
      BlogService.delete({id: idNumber, rev: revNumber}, function () {
        console.log('successfully deleted ' + idNumber);
        removeDiv(_this.posts, index);
      });
    }

    function removeDiv(array, index) {
      array.splice(index, 1);
    }

    function navigateToComment(doc) {
      commentCallBackService.setDoc(doc);
      $rootRouter.navigate(['Comment', 'Home']);
    }
  }
})();
