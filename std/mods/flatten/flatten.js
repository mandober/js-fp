'use strict';
/**
 * Flattens a nested array.
 *
 * @param   {array<*>}  arr  Nested array.
 * @returns {array<*>}       Flattened array.
 */
const flatten = arr =>
    Array.isArray(arr)
        ? arr.reduce((acc, el) => acc.concat(flatten(el)), [])
        : arr;

module.exports = flatten;


// Array.prototype.flatten = flatten;
// let na = [1, [2, [3]], 4];
// let a = na.flatten(na);
// console.log(a);
