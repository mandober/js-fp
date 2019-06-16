/**
 * Describes attributes of a number.
 *
 * @param {number}   x  Numeric value (int, float, NaN, +/-Infinity)
 * @return {object}  Object describing attributes of supplied number.
 *
 */
function describeNumber(x) {
    var desc = {};

    // type: primitive number or boxed number
    if (typeof x === "number") {
        // primitive number
        desc.type = "primitive";
        desc.primitive = true;
    } else if (Object.prototype.toString.call(x) === "[object Number]") {
        // object Number
        desc.type = "object";
        desc.primitive = false;
        x = x.valueOf();
    } else {
        throw new TypeError('[describeNumber] Parameter is not a number');
    }

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

        // negative zero
        if (x === 0 && (1 / x < 0)) {
            desc.subtype = "negativeZero";
            desc.signed = true;
            desc.subtype = "integer";
            desc.safe = true;
            desc.digits = 1;
            desc.parity = "even";
            desc.even = true;
            desc.odd = false;

        // Integers
        } else if (Number.isInteger(x)) {
            desc.subtype = "integer";
            desc.safe = (Number.isSafeInteger(x)) ? true : false;
            desc.digits = String(x).length; // sign included
            desc.even = (x % 2 === 0) ?
                (desc.odd = false, desc.parity = "even", true) :
                (desc.odd = true, desc.parity = "odd", false);

            // radix
            desc.binary = /^0b[01]+$/i.test(String(x));
            desc.toBinary = '0b' + x.toString(2);
            desc.toOctal = '0o' + x.toString(8);
            desc.toHex = '0x' + x.toString(16);

        // Floats
        } else {
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

if (typeof module !== undefined) module.exports = describeNumber;

/*
return {
    type: primitive|object
    primitive: true | false

    subtype: NaN | Infinity | -Infinity | negativeZero | integer | float
    safe: true | false
    digits: {int}
    radix: binary | octal | decimal | hexadecimal
    precision: {int}
    signed: true | false

    parity: odd | even
    odd: true | false
    even: true | false


    prime: true
    size: 1 byte  -> 2**8 -> tiny int (0-255 or -128-127)
    size: 2 bytes -> 2**16 -> small int (0-65,535 or -32,768-32,767)
    size: 4 bytes -> 2**32 -> medium int (0-4,294,967,295 or -2,147,483,648-2,147,483,647)
    size: x bytes -> 2**53 -> max safe int (0-90,071,992,547,409,929,007,199,254,740,992)
    size: 8 bytes -> 64 bits (double)
}
*/