'use strict';
const getArity = require('./');


const one = (x, a = 3, ...y) => [x, a, y];
const two = ([a, b, c]) => [a, b, c];
const three = ({ x = 1, y = 2, z = x + 3 } = {}) => [x, y, z];
const four = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
const five = ([ a, [b, c] ] = [2, [3, 4]]) => [a,b,c];


one.length; /*?*/
getArity(one); /*?*/
two.length; /*?*/
getArity(two); /*?*/
getArity(three); /*?*/
getArity(four); /*?*/

//? error (finally)
getArity(five); /*?*/
// should be 3

five([22, [33, 44]]); /*?*/
five(); /*?*/
