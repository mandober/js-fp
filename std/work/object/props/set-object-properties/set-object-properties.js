/**
 * Define object's property via bitmask.
 * Bitmask: enumerable (4), writable (2), configurable (1).
 * Default bitmask is 4.
 * Example: bitmask=4 -> enumerable (true), writable (false), configurable (false)
 *
 * @param {object}         obj={}      Object for which to define property
 * @param {string|symbol}  propName    Property name
 * @param {*}              propValue   Property value
 * @param {number}         bitmask=4   Bitmask value
 * @returns {object}       Object with the property defined.
 */
function setObjectProperties (obj = {}, propName, propValue, bitmask = 4) {
    // check args
    if (propName === undefined) return new Error("[setObjectProperties] Propery name must be provided");
    if (bitmask < 0 || bitmask > 7) return new Error("[setObjectProperties] Bitmask value, if supplied, must be 0-7 inclusive");
    // shorthands
    var e = "enumerable",   // 4 (read)
        w = "writable",     // 2 (write)
        c = "configurable"; // 1 (execute)
    // init all to zero
    e = w = c = 0;
    // check supplied bitmask
    c = ((bitmask & 1) === 1) ? 1 : 0;
    w = ((bitmask & 2) === 2) ? 1 : 0;
    e = ((bitmask & 4) === 4) ? 1 : 0;
    // define prop: cast 1 or 0 to boolean with !! prefix (!0 === true; !!0 === false)
    Object.defineProperty(obj, propName, {
        value: propValue,
        enumerable: !!e,
        writable: !!w,
        configurable: !!c
    });
    return obj;
}

module.exports = setObjectProperties;