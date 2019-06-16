'use strict';
/**
 * Flattens a nested array.
 * @param  {array<*>}  arr  Nested array.
 * @param  {int}  [depth]  If int is specified, array will be flattened only by the given depth.
 * @returns {array<*>}  New flat array.
 */
module.exports = function(arr, depth) {
    'use strict';

    // if input is not an array at all
    if (!Array.isArray(arr)) throw new TypeError('[flatten] Expected array as the first parameter')

    // if depth is 0, return a copy of input array
    if (depth === 0) return arr.slice();

    // if depth is int bigger than 0, flatten input array by that depth
    if (Number.isInteger(depth) && depth > 0) {
        return flattend(arr, depth);
    }
    
    // otherwise (if 'depth' is lacking or invalid) flatten the array completelly
    else {
        depth = Infinity;
        return flat(arr);
    }

    // flatten completelly
    function flat(arr) {
        return (Array.isArray(arr)) ? arr.reduce((acc, el) => acc.concat(flat(el)), []) : arr;
    }

    // flatten by certain depth
    function flattend(arr, depth) {
        return arr.reduce(
            (acc, el) => acc.concat(
                    depth === 0
                    ? [el]
                    : (depth > 1 && Array.isArray(el)) 
                        ? flattend(el, --depth) 
                        : el
                ), []);
    }

};
