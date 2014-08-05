var app = angular.module('app', ['duoshuo']);

app.controller('duoshuo', function($scope, $duoshuo) {
  // inspect current user 
  $duoshuo.on('ready', function(err, data) {
    if (err) return console.error(err);
    console.log(data);
    $scope.responseJSON = JSON.stringify(data);
  });
  // using lowlevel `get` method
  $duoshuo.get('threads/list', {
    page: 1,
    limit: 30
  }, function(err, data) {
    // success callback
    // `err` is common error
    if (err) return console.error(err);
    $scope.threads = data.response;
  }, function(data){
    // error callback
    // `data` is http error
    console.log(data);
  });
  // test membership api
  $duoshuo.get('sites/membership', {}, function(err, data) {
    // success callback
    if (err) return console.error(err);
    console.log(data);
  }, function(data){
    console.log(data);
  });
});