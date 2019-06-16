'use strict';
//! isSomething()
/**
 * Check if value is something.
 *
 * @param {*}   x   Value.
 * @returns  {boolean}  Returns true if value is something.
 */
const isSomething = (el) => ![null, undefined, "", NaN].includes(el);


if (typeof module !== "undefined") module.exports = isSomething;
