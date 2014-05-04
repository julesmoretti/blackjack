// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var game;
      return this.set('game', game = new Game());
    };

    App.prototype.event = function() {};

    App.prototype.newGame = function() {
      var game;
      this.set('game', game = new Game());
      return this.trigger('restart', this);
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map
