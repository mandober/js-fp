/**
 * Determine if input is an array-like value.
 *
 * @param    {any}      x   Any value.
 * @returns  {boolean}  Returns `true` if value is array-like, `false` otherwise.
 */
const isArrayLike = function isArrayLike(x) {
    'use strict';
    if (typeof x === "object" && "length" in Reflect.ownKeys(x)) return true;
    return false;
}


//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = isArrayLike;
