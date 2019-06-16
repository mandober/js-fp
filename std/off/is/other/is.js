'use strict';

var is = {
    falsy(x) { return !x }, // false, 0, null, undefined, "", NaN
    // falsey: null, undefined, "", NaN, false, 0
    truthy(x) { return !!x },

    generator(x) {
        return x.isGenerator();
    },
    promise(obj) {
        return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
    },

    // numbers
    even(x) { return (x % 2 === 0) },
    odd(x) { return (x % 2 !== 0) },
    negativeZero(x) { return (x === 0 && (1 / x < 0)) },
    nan: (x) => Number.isNaN(x),

    safeInt: (x) => Number.isSafeInteger(Number(x)), // number and number-in-string
    arrayIndex(x) { return /^0$|^[1-9]\d*$/.test(x) && x <= 4294967294 }, // 2^32-2
    pojoIndex(x) { return /^0$|^[1-9]\d*$/.test(x) && x <= 4503599627370494 }, // 2^52-2

    littleEndian() {
        new Uint32Array((new Uint8Array([1, 2, 3, 4])).buffer)[0] === 0x04030201; // true on my sys
    },

};
