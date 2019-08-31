'use strict';

// currying
const curry = (f, arr = []) =>
  (...args) =>
    (a =>
      a.length === f.length ? f(...a) : curry(f, a)
    )([...arr, ...args]);

module.exports = curry;


const flex =
(f,...x) =>
    (...y) =>
      (...z) =>
        f.length == x.length
          ? f(...z)
          : flex(...z)
    (...x,...y);


// playground
let a4 = (a,b,c,d) =>a+b+c+d;

// let r = curry(a4)(1)(2)(3, 4);
// console.log(r);

// r = flex(a4);
// console.log(r.toString());

console.log(flex(a4).toString(), "\n");
console.log(flex(a4)(1).toString(), "\n");
