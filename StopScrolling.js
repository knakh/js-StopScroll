;'use strict';

/**
 * StopScrolling
 * require: https://code.jquery.com/jquery-1.12.4.min.js
 */
var StopScrolling = function () {
  var _this = this;
  _this.container = $(window);
  _this.concrete = $('body');
  _this.original = {
    scrollTop: 0,
  };
  _this.lockClassName = 'js-stop-scrolling';
};
StopScrolling.prototype = {
  stop: function () {
    var _this = this;

    _this.saveScrollTop();
    _this.concrete.addClass(_this.lockClassName);
    _this.concrete.css('top', -_this.original.scrollTop + 'px');
  },
  purge: function () {
    var _this = this;

    _this.concrete.removeClass(_this.lockClassName);
    _this.container.scrollTop(_this.original.scrollTop);
  },
  saveScrollTop: function () {
    var _this = this;

    _this.original.scrollTop = _this.container.scrollTop();
  },
};
