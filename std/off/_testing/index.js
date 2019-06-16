// 'use strict';

const isStrict = require("../is-strict-mode");

/**
 * Determine if value is an array.
 *
 * @param    {any}      value   Any value.
 * @returns  {boolean}  Returns true if value is an array.
 */
function isArray(value) {
    'use strict';
    isStrict(this); //?
    return (Array.isArray)
        ? (Array.isArray(value))
        : (Object.prototype.toString.call(value) === '[object Array]');
}

module.exports = isArray;
