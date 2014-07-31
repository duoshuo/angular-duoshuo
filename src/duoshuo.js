;(function(angular, duoshuo, configs) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  if (!duoshuo) throw new Error('duoshuo embed.js required!');
  if (!configs) throw new Error('duoshuoQuery object required');
  if (!configs.short_name) throw new Error('duoshuo short_name required');

  angular.module('duoshuo', [])
    .factory('$duoshuo', function() {
      return new Duoshuo(configs);
    });

  function Duoshuo() {
    this.configs = configs;
    this.short_name = configs.short_name;
  }

})(window.angular, window.DUOSHUO, window.duoshuoQuery);
