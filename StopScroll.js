;'use strict';
/**
 * StopScroll
 */
var StopScroll = function () {
  var t = this;
  t.container = $(window);
  t.concrete = $('body');
  t.original = {
    scrollTop: 0,
  };
  t.bindClassName = 'js-stop-scroll';
  t.lockClassName = 'js-stop-scroll--locked';
  t.concrete.addClass(this.bindClassName);
};
StopScroll.prototype = {
  stop: function () {
    var t = this;

    t.saveScrollTop();
    t.concrete.addClass(t.lockClassName);
    t.concrete.css('top', -t.original.scrollTop + 'px');
  },
  purge: function () {
    var t = this;

    t.concrete.removeClass(t.lockClassName);
    t.container.scrollTop(t.original.scrollTop);
    t.unbindClass();
  },
  unbindClass: function () {
    var t = this;

    t.concrete.removeClass(t.bindClassName);
  },
  saveScrollTop: function () {
    var t = this;

    t.original.scrollTop = t.container.scrollTop();
  },
};

