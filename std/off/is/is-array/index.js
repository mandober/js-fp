/**
 * Determine if value is an array
 *
 * @param    {any}      x   Any value.
 * @returns  {boolean}  Returns `true` if value is an array, `false` otherwise.
 */
module.exports = function isArray(x) {
    return (Array.isArray)
        ? (Array.isArray(x))
        : (Object.prototype.toString.call(x) === '[object Array]');
}
