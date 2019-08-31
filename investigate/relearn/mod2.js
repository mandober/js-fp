(function (window, undefined) {
  'use strict';
  // start
  
  function Base(options) {
    var Big = this.Big = options.Big;
  
    this.ext = {
      from: [],
      to: [],
      convert: [],
      suggest: [],
      getName: [],
      valid: [],
    };
    
    this.extend(options.extensions || []);
  }
  
  // base.extend({
  //  from:    function (fromBase, number) { },
  //  to:      function (toBase, number)   { },
  //  convert: function (fromBase, toBase, number) { },
  //  suggest: function (baseText, reBaseText) { },
  //  getName: function (baseId) { },
  // });
  
  Base.prototype.extend = function (extension) {
    // If extension is a function, call it and recurse.
    if (typeof extension === 'function') {
      this.extend(extension.call(this));
      return;
    }

    // If extension is an array, recurse.
    if (extension.length) {
      for (var i = 0; i < extension.length; i++) {
        this.extend(extension[i]);
      }
      return;
    }

    // Add the extensions.
    for (var key in this.ext) {
      if (key in extension) {
        this.ext[key].push(extension[key]);
      }
    }
  };
  
  Base.prototype.convert = function (fromBase, toBase, number) {}
  Base.prototype.convertToMultiple = function (fromBase, toBases, number) {}
  Base.prototype.from = function (fromBase, number) {}
  Base.prototype.to = function (toBase, number) {}
  Base.prototype.valid = function (base, number) {}
  Base.prototype.getName = function (baseId) {}
  Base.prototype.suggest = function (baseText) {}
  Base.prototype.suggestList = function (baseText) {}
  Base.prototype.toBig = function (number) {}

  // Public utilities
  Base.addSpaces = function (input, numCharsInGroup, fromBeginning) {}
  
  // Utilities
  function append(array, arrayToAppend) {}
  function notUndefined(array, fn) {}
  function toBig(number) {}
  function regexpEscape(value) {}

  // attach our Base function object to global (in case of browser, window) object
  window.Base = Base;

}(window));


