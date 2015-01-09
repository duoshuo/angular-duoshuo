;(function(angular) {
  'use strict';

  if (!angular) 
    throw new Error('angular.js required!');

  angular
    .module('duoshuo')
    .directive('duoshuoRencentVisitors', rencentVisitors);

  function rencentVisitors() {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div class="ds-recent-visitors"></div>',
      link: function(scope, element, attrs) {
        if (!window.DUOSHUO.initSelector)
          return;

        // Trigger init selector function 
        window.DUOSHUO
          .initSelector(window.DUOSHUO.selectors['.ds-recent-visitors'])
      }
    };
  }

})(window.angular)
