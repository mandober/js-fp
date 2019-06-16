// my module
var mandober = function (_, glob) {
    'use strict';

    /**
     * Checks to see if value is an integer or float.
     *
     * @param {*} any Any value.
     * @return {boolean}
     *
     */
    mm.isNumber = function (any) {
        return typeof any === 'number' && isFinite(any);
    }


    /**
     * Checks to see if value is a float.
     *
     * @param {number} num Numeric value.
     * @return {boolean}
     *
     */
    let isFloat = function (num) {
        if (arguments.length !== 1) throw new TypeError('[isFloat] - Wrong number of arguments');
        return isFinite(num) && (Math.abs(num % 1) !== 0);
    }


    /**
     * Checks to see if value is a negative zero.
     *
     * @param {number} num Numeric value.
     * @return {boolean}
     *
     */
    let isNegativeZero = x => x === 0 && (1 / x < 0);


    /**
     * Describes attributes of a number.
     *
     * @param {number}  num  Numeric value (int, float, NaN, +/-Infinity)
     * @return {object}  Object describing attributes of a number.
     *
     */
    let describeNumber = function (x) {
        // get type
        let t = typeof x,
            desc = {};
        if (t !== "number") throw new TypeError('[descNum] - Parameter is not a number');
        // number
        desc.type = "number";
        desc.primitive = true;
        // NaN
        if (Number.isNaN(x)) desc.subtype = "NaN";
        // -Infinity
        if (Number.NEGATIVE_INFINITY === x) desc.subtype = "-Infinity";
        // Infinity
        if (Number.POSITIVE_INFINITY === x) desc.subtype = "Infinity";

        // Finite
        if (Number.isFinite(x)) {
            desc.finite = true;
            desc.signed = (Math.abs(x) === x) ? false : true;

            if (Number.isInteger(x)) {
                // Integers
                desc.subtype = "integer";
                desc.safe = (Number.isSafeInteger(x)) ? true : false;
                desc.digits = String(x).length; // sign included
                desc.integer = x;
                desc.fraction = 0;
                desc.even = (x % 2 === 0) ? true : false;
                // radix
                desc.binary = /^0b[01]+$/i.test(String(x));

                desc.toBinary = '0b' + x.toString(2);
                desc.toOctal = '0o' + x.toString(8);
                desc.toHex = '0x' + x.toString(16);

            } else {
                // Floats
                desc.subtype = "float";
                desc.digits = String(x).length; // sign and point included
                desc.integer = Math.abs(x | 0);
                desc.fraction = Math.abs(Number(/\d+.(\d+)/.exec(String(x))[1]));
                desc.trueFraction = Math.abs(x - (x | 0));
                desc.precision = String(desc.fraction).length;
            }
        }

        return desc;
    };

/*
ex.: 11
return {
    type: number
    subtype: integer | float | NaN | Infinity | -Infinity
    primitive: true
    safe: true
    digits: 2
    radix: binary | octal | decimal | hexadecimal
    precision: 0
    signed: false
    parity: odd | even
    prime: true

    size: 1 byte  -> 2**8 -> tiny int (0-255 or -128-127)
    size: 2 bytes -> 2**16 -> small int (0-65,535 or -32,768-32,767)
    size: 4 bytes -> 2**32 -> medium int (0-4,294,967,295 or -2,147,483,648-2,147,483,647)
    size: x bytes -> 2**53 -> max safe int (0-90,071,992,547,409,929,007,199,254,740,992)

    size: 8 bytes -> 64 bits (double)
}
*/

    // API - exported methods
    return {
        isNumber: isNumber,
        isFloat: isFloat,
        isNegativeZero: isNegativeZero,
        descNum: descNum,
    };


    // return module
    return mm;

}(mandober || {}, _, typeof window !== 'undefined' ? window : global);
