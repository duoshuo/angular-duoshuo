var app = angular.module('app', ['duoshuo']);

app.controller('duoshuo', function($scope, $duoshuo){
  // inspect current user 
  $duoshuo.on('ready', function(err, data) {
    console.log(data);
    $scope.responseJSON = JSON.stringify(data);
    $scope.$apply();
  });
});
