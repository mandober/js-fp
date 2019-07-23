// @ts-check

'use strict';
/**
 * Convert a binary fn whose 2nd arg is optional into unary fn
 * 
 * If fn is not unary, fix the first arg.
 */
const unary = fn =>
    (fn.length == 1)
        ? fn  
        : arg => fn.call(this, arg);

module.exports = unary;

"123".split("").map(parseInt);        // [1, NaN, NaN]
"123".split("").map(unary(parseInt)); // [1, 2, 3]
