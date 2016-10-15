(function () {
  angular.module('couchBlogApp.common')
    .factory('commentCallBackService', commentCallBackService);

  function commentCallBackService() {
    var doc;

    return {
      onClick: onClick,
      setDoc: setDoc,
    };

    function onClick() {
      return doc;
    }

    function setDoc(calllBackDoc) {
      doc = calllBackDoc;
    }
  }
}());
