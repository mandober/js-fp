'use strict';
const unary = require('./');

// example usage:

// using parseInt as a cb doesnt work
// because parseInt has an optional 2nd arg (radix)
['1', '2', '3'].map(parseInt); /*?*/
//=> [1, NaN, NaN]

// it must be used like this:
['1', '2', '3'].map((s) => parseInt(s)); /*?*/
//=> [1, 2, 3]

// or with unary decorator:
['1', '2', '3'].map(unary(parseInt)); /*?*/
//=> [1, 2, 3]
