(function () {
  angular
    .module('couchBlogApp.post')
    .component('addNewPost', {
      controller: AddNewPostController,
      controllerAs: 'vm',
      templateUrl: 'scripts/components/new-post/post.html'
    });

  AddNewPostController.$inject = [
    'BlogService'
  ];

  function AddNewPostController(BlogService) {
    var _this = this;
    _this.addNewBlogPost = addNewBlogPost;
    _this.author = '';
    _this.title = '';
    _this.content = '';
    _this.image_uri = '';
    _this.categories = [];
    _this.tags = [];

    _this.categoryList = [{
        id: 1,
        name: 'Unix'
      },
      {
        id: 2,
        name: 'Programming'
      },
      {
        id: 3,
        name: 'Hacking'
      }];

    _this.tagsList = [{
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'cloud'
      },
      {
        id: 3,
        name: 'networking'
      }];

    function getCategories() {
      angular.forEach(_this.categoryList, function (category) {
        if (category.selected) _this.categories.push(category.name);
      });
    }

    function getTags() {
      angular.forEach(_this.tagsList, function (tag) {
        if (tag.selected) _this.tags.push(tag.name);
      });
    }

    function addNewBlogPost() {
      getCategories();
      getTags();

      var post = {
        author: _this.author,
        created_on: new Date(),
        title: _this.title,
        content: _this.content,
        image_uri: _this.image_uri,
        categories: _this.categories,
        tags: _this.tags,
      };

      BlogService.save({}, post, function () {
        console.log('new post created');
      });
    }
  }

})();
