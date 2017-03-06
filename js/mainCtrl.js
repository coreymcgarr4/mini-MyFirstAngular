angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ["Jennie", "Michelle", "Sam", "Spencer", "Lyle", "Dylan"];
  var addFriend = function(name){
    $scope.friends(name);
  }
});
