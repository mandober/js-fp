'use strict';
const truthify = require ("./");

const pack     = require('../pack/');
const identity = require('../identity/');


// tests
var a = new Array(6);
truthify(a); /*?*/
truthify([]); /*?*/
truthify([,, ,, , ,]); /*?*/
truthify([1, '', 3, 0, null, undefined, ,]); /*?*/
truthify([undefined, null, void 0, "", false, 0]); /*?*/

var nothings = [null, undefined, "", NaN];


var nothing = (el) => ![null, undefined, "", NaN].includes(el);

var arr = [0, undefined, 2, null, 4, false, 6, true, 8, "", 10, NaN, 11];



arr.filter(identity); /*?*/
arr.filter((el) => !nothings.includes(el)); /*?*/
arr.filter(nothing); /*?*/



var isNothing = (el) => [null, undefined, "", NaN].includes(el);
var isSomething = (el) => ![null, undefined, "", NaN].includes(el);

