'use strict';
/**
 * Convert an n-ary (n > 2) fn whose args, except
 * the first two, are optional into binary a fn.
 * 
 * If fn is not binary, fix the first two args.
 */
const binary = fn =>
    fn.length < 3
        ? fn
        : (a, b) => fn.call(this, a, b);

module.exports = binary;

//"123".split("").map(parseInt);        // [1, NaN, NaN]
//"123".split("").map(binary(parseInt)); // [1, 2, 3]

