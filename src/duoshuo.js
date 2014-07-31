;(function(angular, duoshuo, API, configs, NProgress) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  if (!duoshuo) throw new Error('duoshuo embed.js required!');
  if (!API) throw new Error('duoshuo embed.js must be unstable version!');
  if (!configs) throw new Error('duoshuoQuery object required!');
  if (!configs.short_name) throw new Error('duoshuo short_name required!');

  var NProgressExist = NProgress && NProgress.start && NProgress.stop;

  angular.module('duoshuo', [])
  .service('$duoshuo', function($rootScope) {
    var self = this;

    // lowlevel api set
    angular.forEach(['get', 'post', 'ajax'], function(method) {
      self[method] = function(endpoint, data, callback, skipCheck) {
        if (NProgressExist) NProgress.start();
        return API[method](endpoint, data, function(d) {
          if (NProgressExist) NProgress.stop();
          callback(d);
          if (!skipCheck) $rootScope.$apply();
          return;
        });
      }
    });

    // event wrapper
    this.on = function(eve, callback, skipCheck) {
      if (['reset', 'ready'].indexOf(eve) === 0) 
        return callback(new Error('event not found'));
      var e = eve;
      if (e === 'ready') e = 'reset';
      return DUOSHUO.visitor.on(e, function() {
        var self = this;
        var data = this.data;
        callback(null, data, self);
        if (!skipCheck) $rootScope.$apply();
        return;
      });
    };
  });

})(
  window.angular,
  window.DUOSHUO,
  window.DUOSHUO.API,
  window.duoshuoQuery,
  window.NProgress
);
