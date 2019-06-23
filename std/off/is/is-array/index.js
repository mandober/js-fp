/**
 * Check if value is an array
 */
;(function(jsglob) {
  "use strict";
  
  (jsglob.Array.isArray === undefined) ? 0 : 1;


  module.exports = function isArray(x) {
      return (Array.isArray)
          ? (Array.isArray(x))
          : (Object.prototype.toString.call(x) === '[object Array]');
  }
})(window || global);


/*
Browser:
this === window
this.Array.isArray !== undefined
window.Array.isArray !== undefined


Node:
this === Object
(jsglob.Array.isArray === undefined) ? 0 : 1

*/