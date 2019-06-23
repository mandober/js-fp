/*
ć-lib utilities


*/
'use strict';

// ć object as namespace
let ć = {
  id: "ć-lib",
  version: "0.0.1",
};

ć.curry = (f, arr = []) => (...args) => g =>
      g.length === f.length ? f(...g) : curry(f, g)([...arr, ...args]);


module.exports = ć;




// import many from one
// const {car, cdr, cons, isAtom} = require(STDMODS + 'list');
const car = require('./mods/list/list.js');


// Info
const cc = x => console.log(x);
const cl = x => console.log(x.toString(), x);
// const ls = x => console.log(JSON.parse(JSON.stringify(x)));
const getClass = x => Object.prototype.toString.call(x).split(/[ \]]/)[1];


// Arith
const add1 = a => b => a + b;  // curried add
const add2 = (a, b) => a + b;  // binary add
const sum = ([...arr]) => arr.reduce((a, b) => a + b);






// FP
const compose = (...fns) => (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];


/*
(function(G) {
c(getClass(G))
c(getClass(global))
c(getClass(this));
// cc(typeof(this) == 'object')
// cc(global == this)
})(this)
*/

// cc(getClass(Array.isArray))
