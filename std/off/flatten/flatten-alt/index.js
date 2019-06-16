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
