/**
 * Flatten a nested array.
 *
 * @param {array<*>}  arr  Nested array.
 * @returns {array<*>}  Flattened array.
 */
(function(root, factory) {
    'use strict';
    // AMD. Register as an anonymous module.
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // NODE
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // BROWSER GLOBAL
    } else {
        root.Off.flatten = factory();
    }

}(this, function() {
    'use strict';
    // DEFINITION:
    const flatten = arr => (Array.isArray(arr))
        ? arr.reduce((acc, el) => acc.concat(flatten(el)), [])
        : arr;

    return flatten;
}));
