(function () {
  angular
    .module('couchBlogApp.comment')
    .component('addNewComment', {
      controller: AddNewCommentComponent,
      controllerAs: 'vm',
      templateUrl: 'app/scripts/components/comment/comment.html'
    });


  AddNewCommentComponent.$inject = [
    'BlogService',
    'commentCallBackService'
  ];

  function AddNewCommentComponent(BlogService, commentCallBackService) {

    var _this = this;
    _this.doc = commentCallBackService.onClick();
    _this.addNewComment = addNewComment;
    _this.author = '';
    _this.comment = '';

    // console.log(JSON.stringify(commentCallBackService.onClick()));

    function addNewComment() {
      var comment = new Comment(_this.author, _this.comment);
      var document = new Document(_this.doc, comment);
      BlogService.update({id: _this.doc._id}, document, function (response) {
        console.log(JSON.stringify(response));
      })
    }

    function Document(doc, newComment) {
      this._rev = doc._rev;
      this.author = doc.author;
      this.title = doc.title;
      this.content = doc.content;
      this.created_on = doc.created_on;
      this.image_uri = doc.image_uri;
      this.categories = doc.categories;
      this.tags = doc.tags;
      this.comments = [];
      if (doc.hasOwnProperty('comments')) {
        this.comments = doc.comments;
        this.comments.push(newComment);
      } else {
        this.comments.push(newComment);
      }
    }

    function Comment(author, comment) {
      this.author = author;
      this.comment = comment;
    }
  }

})();
