/**
 * Determine if value is an array.
 *
 * @param    {any}      x   Any value.
 * @returns  {boolean}  Returns `true` if value is an array, `false` otherwise.
 */
const isArray = function isArray(x) {
    'use strict';

    // array
    if (Array.isArray(x)) {
        return ({
            array: true,
            arrayLike: false
        })
    } else {
        // array-like
        if (typeof x === "object" && "length" in Reflect.ownKeys(x)) {
            return ({
                array: false,
                arrayLike: true
            })
        } else {
            return false;
        }
    }
}


//* ========== EXPORT ==========
if (typeof module !== "undefined") module.exports = isArray;


//* ========== TEST ==========
var arr = [1,2,3];
var alike = {0:0, 1:1, length:2};

isArray(arr); //?
isArray(alike); //?
isArray("ake"); //?


var a = isArray(alike); //?
a.array; //?
a.arrayLike; //?

var b = isArray(arr); //?
b.array; //?
b.arrayLike; //?

