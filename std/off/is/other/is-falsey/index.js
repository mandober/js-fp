'use strict';
//! isFalsey()
/**
 * Return new array without the falsey values.
 *
 * @param {array<*>} arr  Sparse array.
 * @returns {array<*>} New array without the falsey values.
 */
const isFalsey = (x) => [undefined, NaN, "", null, false, 0].includes(x);


if (typeof module !== "undefined") module.exports = isFalsey;
