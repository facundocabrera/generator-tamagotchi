/* global define: true */
define(function(require) {

  var Backbone = require('backbone'),
      template = require('text!./index.html');

  var View = Backbone.View.extend({

    render: function () {
      this.$el.html(template);
      return this;
    },

    cleanup: function () {
      this.remove();
    }

  });

  return View;

});
