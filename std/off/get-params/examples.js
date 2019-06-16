'use strict';
const getParams = require("./");


//* 1) plain params
const f1 = (/*param a*/a, /*param b*/b, /*param c*/c) => {
    (c, a); // another parens
    c = /*comment1*/a + b;//endcomment1
    return a+b+c;
};
getParams(f1); //?
//=> ['a','b','c']


//* 2) param with spread operator
function f2(a, b, ...c) {}
getParams(f2); //?
//=> ['a','b','c']


//* 3) params with default values
var f3 = function f3(a=3+6, b=22, c=a) {}
getParams(f3); //?
//=> ['a','b','c']


//* 4) mixed params
function f4(a, b = 22, ...c) { }
getParams(f4); //?
//=> ['a','b','c']
