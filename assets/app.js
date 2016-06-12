// Module declaration: first argument is name of module, second is an array
// of modules that this module depends on.
var app = angular.module('app', []);

// Controller declaration: first argument is name of controller, second is
// the function that builds an instance of the controller.
// Dependency inject $scope
// $scope is an object you can access in both the html and in the controller
// Dependency inject $http
angular.module('app')
.controller('PostsCtrl', function($scope, PostsSvc) {
  // get posts from our API
  PostsSvc.fetch().success(function(posts) {
    $scope.posts = posts;
  });

  $scope.addPost = function() {
    if($scope.postBody) {
      // add a post with the content set in the input with ng-model="postBody"
      PostsSvc.create({
        username: 'dickeyxxx',
        body: $scope.postBody
      }).success(function(post) {
        $scope.posts.unshift(post);
        // find the input with ng-model="postBody" and set its value to null
        $scope.postBody = null;
      });
    }
  };
});

angular.module('app')
.service('PostsSvc', function($http) {
  this.fetch = function() {
    return $http.get('/api/posts');
  };

  this.create = function(post) {
    return $http.post('/api/posts', post);
  };
});
