const flatten = function (arr, depth) {
    'use strict';
    // if not an array at all
    if (!Array.isArray(arr)) return arr;

    // if depth is int
    if (Number.isInteger(depth) && depth > 0) {
        return flattend(arr, depth);
    } else {
        depth = Infinity;
        return flat(arr);
    }

    // flatten
    function flat(arr) {
        return (Array.isArray(arr)) ? arr.reduce((acc, el) => acc.concat(flat(el)), []) : arr;
    }

    // deep flatten
    function flattend(arr, depth) {
        return arr.reduce(
            (acc, el) =>
                acc.concat(
                    depth === 0
                        ? [el]
                        : (depth > 1 && Array.isArray(el)) ? flattend(el, --depth) : el
                ), []);
    }

};

//* ==================== EXPORT ====================
module.exports = flatten;



//* ==================== TEST ======================
var a = [ 1, [2, [3, [4, [5, [6, [7]]]]]] ];
flatten(a); //?
flatten(a, 1); //?

flatten(a, 2); //?
flatten(a, 3); //?
flatten(a, 4); //?
flatten(a, 5); //?
flatten(a, 6); //?

flatten(a); //?

flatten([ [[1, 2]], [[3, 4]], [[5, 6]] ], 1); //?
