'use strict';
/**
 * Flattens a nested array.
 *
 * @param   {array<*>}  arr  Nested array.
 * @returns {array<*>}       Flattened array.
 */
const flatten = (arr) =>
    (Array.isArray(arr))
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

