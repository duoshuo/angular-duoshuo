;(function(angular, NProgress) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  var NProgressExist = NProgress && NProgress.start && NProgress.done;

  angular.module('duoshuo', [])
  .service('$duoshuo', function($rootScope) {
    var self = this;

    // lowlevel api set
    angular.forEach(['get', 'post', 'ajax'], function(method) {
      self[method] = function(endpoint, data, callback, errorCallback, skipCheck) {
        if (!window.DUOSHUO) throw new Error('duoshuo embed.js required!');
        var API = window.DUOSHUO.API;
        if (!API) throw new Error('duoshuo embed.js must be unstable version!');
        if (NProgressExist) NProgress.start();
        return API[method](endpoint, data, function(result) {
          if (NProgressExist) NProgress.done();
          callback(
            (result.code === 0) ? null : new Error(result.code + ' ' + result.errorMessage), 
            result.response, 
            result
          );
          if (!skipCheck) $rootScope.$apply();
          return;
        }, errorCallback);
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
