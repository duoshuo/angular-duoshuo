;(function(angular, NProgress) {
  'use strict';

  if (!angular) 
    throw new Error('angular.js required!');

  var NProgressExist = NProgress && NProgress.start && NProgress.done;

  angular
    .module('duoshuo')
    .directive('rencentComments', ['duoshuo', rencentComments]);

  // Todo: Remove direactives wrapper,
  function rencentComments(duoshuo) {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="ds-recent-comments-wrapper"></div>',
      link: function(scope, element, attrs) {
        // Render comments when DOM has been injected.
        angular.element(document).ready(function() {
          
        });
      }
    };
  }

})(window.angular, window.NProgress)
