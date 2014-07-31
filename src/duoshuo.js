;(function(angular, duoshuo, API, configs) {

  'use strict';

  if (!angular) throw new Error('angular.js required!');
  if (!duoshuo) throw new Error('duoshuo embed.js required!');
  if (!API) throw new Error('duoshuo embed.js must be unstable version!');
  if (!configs) throw new Error('duoshuoQuery object required!');
  if (!configs.short_name) throw new Error('duoshuo short_name required!');

  angular.module('duoshuo', [])
    .factory('$duoshuo', function() {
      return new Duoshuo(configs);
    });

  function Duoshuo() {
    this.configs = configs;
    this.events = ['reset', 'ready'];
  }

  // lowlevel api set
  Duoshuo.prototype.get = API.get;
  Duoshuo.prototype.post = API.post;
  Duoshuo.prototype.ajax = API.ajax;

  // events
  Duoshuo.prototype.on = function(eve, callback) {
    if (this.events.indexOf(eve) === 0) return callback(new Error('event not found'));
    var e = eve;
    if (e === 'ready') e = 'reset';
    return DUOSHUO.visitor.on(e, function(){
      var self = this;
      var data = this.data;
      return callback(null, data, self);
    });
  };

})(
  window.angular, 
  window.DUOSHUO, 
  window.DUOSHUO.API,
  window.duoshuoQuery
);
