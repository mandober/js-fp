'use strict';
const partial = require ("./");


function maths(cb, x, y, z) {
    return cb(x, y, z);
}

var sum = (a, b, c) => a + b + c;
maths(sum, 2, 3, 5); /*?*/


partial(sum)(2, 3, 5); /*?*/
partial(sum)(2)(3, 5); /*?*/
partial(sum)(2)(3)(5); /*?*/
partial(sum)(2, 3)(5); /*?*/
partial(sum, 2)(3, 5); /*?*/
partial(sum, 2)(3)(5); /*?*/
partial(sum, 2, 3)(5); /*?*/
