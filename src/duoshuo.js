;(function(angular, duoshuo, configs) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  if (!duoshuo) throw new Error('duoshuo embed.js required!');
  if (!configs) throw new Error('duoshuoQuery object required');

  angular.module('duoshuo', [])
    .factory('$duoshuo', function() {
      return new Duoshuo(configs);
    });

})(window.angular, window.DUOSHUO, window.duoshuoQuery);
