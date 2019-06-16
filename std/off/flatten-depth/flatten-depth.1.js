'use strict';
const isArray = require ("../is-array");

/**
 * Flattens a nested array.
 *
 * @param   {array<*>}  arr  Nested array.
 * @returns {array<*>}       Flattened array.
 */
const flatten = (arr) =>
    (isArray(arr))
        ? arr.reduce((acc, el) => acc.concat(flatten(el)), [])
        : arr;


if (typeof module !== undefined) module.exports = flatten;


//* make sure depth is uint
// recursive reduce + concat + custom depth
var flattend = (arr, depth = Infinity) =>
    arr.reduce(
        (acc, el) =>
            acc.concat(
                // base case 1: if depth is 0, stop and return [el]...
                depth === 0 /*? depth */
                    // ...returning [el] -> return acc array as is
                    ? [el]
                    // base case 2: if depth > 1 AND el is an array, return element...
                    : (depth > 1 && Array.isArray(el)) /*? el */
                        // recursive case: el is array AND depth > 1, so re-call flatten and decrement depth
                        ? flattend(el, --depth) /*? el */
                        // (if false) ...returning element
                        : el /*? el */
            )
    , []);


// var a = [ 1, [2, [3, [4, [5, [6, [7]]]]]] ];
// flattend(a); //?
// flattend(a, 1); //?
// flattend(a, 2); //?
// flattend(a, 3); //?
// flattend(a, 4); //?
// flattend(a, 5); //?
// flattend(a, 6); //?

var b = [[[6]]];
// flattend(b); //?
// flattend(b, 6); //?
// flattend(b, 5); //?
// flattend(b, 4); //?
// flattend(b, 3); //?
flattend(b, 2); //?
// flattend(b, 1); //?
