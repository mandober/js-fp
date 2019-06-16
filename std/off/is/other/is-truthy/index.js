'use strict';
//! isTruthy()
/**
 * Return new array without the falsey values.
 *
 * @param {array<*>} arr  Sparse array.
 * @returns {array<*>} New array without the falsey values.
 */
const isTruthy = (x) => ![undefined, NaN, "", null, false, 0].includes(x);


if (typeof module !== "undefined") module.exports = isTruthy;
