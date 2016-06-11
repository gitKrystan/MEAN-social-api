// Module declaration: first argument is name of module, second is an array
// of modules that this module depends on.
var app = angular.module('app', []);

// Controller declaration: first argument is name of controller, second is
// the function that builds an instance of the controller.
// Dependency inject $scope
// $scope is an object you can access in both the html and in the controller
// Dependency inject $http
app.controller('PostsCtrl', function($scope, $http) {
  // get posts from our API
  $http.get('http://localhost:3000/api/posts')
  .success(function(posts) {
    $scope.posts = posts;
  });

  $scope.addPost = function() {
    if($scope.postBody) {
      // add a post with the content set in the input with ng-model="postBody"
      $http.post('/api/posts', {
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
