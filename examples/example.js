var app = angular.module('app', ['duoshuo']);

app.controller('duoshuo', function($scope, $duoshuo) {
  // console.log($duoshuo);
  // inspect current user 
  $duoshuo.on('ready', function(err, data) {
    console.log(data);
    $scope.responseJSON = JSON.stringify(data);
  });
  // using lowlevel `get` method
  $duoshuo.get('threads/list', {
    page: 1,
    limit: 30
  }, function(data) {
    $scope.threads = data.response;
  });
});