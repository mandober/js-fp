// Flatten nested arrays

'use strict';

const flatten = arr =>
    Array.isArray(arr)
    ? arr.reduce((acc, el) => acc.concat(flatten(el)), [])
    : arr;


const flattenToDepth = depth => (...arr) =>
    arr.reduce((acc, el) => acc.concat(
            depth === 0
            ? [el]
            : (depth > 1 && Array.isArray(el))
                ? flattend(el, --depth)
                : el
        ), []);



module.exports = flatten;
