'use strict';
//! pack()
/**
 * Pack a sparse array.
 *
 * @param {array<*>} arr  Sparse array.
 * @returns {array<*>} Return a new, packed, array.
 */
const pack = (arr) => arr.filter(el => el);


module.exports = pack;


var a = pack([[, undefined, 3], 4, [null, 0, false,], [5, undefined], 5]);
a //?
