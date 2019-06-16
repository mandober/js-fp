'use strict';
const getParams = require('../fx-get-params/');

/**
 * Get function's arity.
 * @depends get-params
 *
 * @param  {function}  fn  A function.
 * @returns {number}  Number of function's parameters.
 */
const getArity = (fn) => getParams(fn).length;

if (typeof module !== undefined) module.exports = getArity;
