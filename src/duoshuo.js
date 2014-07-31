;(function(angular, NProgress) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  var NProgressExist = NProgress && NProgress.start && NProgress.done;

  angular.module('duoshuo', [])
  .service('$duoshuo', function($rootScope) {
    var self = this;

    // lowlevel api set
    angular.forEach(['get', 'post', 'ajax'], function(method) {
      self[method] = function(endpoint, data, callback, skipCheck) {
        if (!window.DUOSHUO) throw new Error('duoshuo embed.js required!');
        var API = window.DUOSHUO.API;
        if (!API) throw new Error('duoshuo embed.js must be unstable version!');
        if (NProgressExist) NProgress.start();
        return API[method](endpoint, data, function(d) {
          if (NProgressExist) NProgress.done();
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
      return window.DUOSHUO.visitor.on(e, function() {
        var self = this;
        var data = this.data;
        callback(null, data, self);
        if (!skipCheck) $rootScope.$apply();
        return;
      });
    };
  });

})(window.angular, window.NProgress);
