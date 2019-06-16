'use strict';
//! isNothing()
/**
 * Check if value is nothing.
 *
 * @param {*}   x   Value.
 * @returns  {boolean}  Returns true if value is nothing.
 */
const isNothing = (el) => [null, undefined, "", NaN].includes(el);


if (typeof module !== "undefined") module.exports = isNothing;
