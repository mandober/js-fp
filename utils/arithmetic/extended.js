/*
Arithmetic - the extended ops:
    - increment: inc, successor
    - decrement: dec, predecessor
    - addition: add
    - subtraction: sub
    - multiplication: mul, mult
    - division: div

    All functions are uncurried?

*/
(function(Arith) {
    'use strict';

// Summation
const sumAll = (...xs) => xs.reduce((a, b) => a + b);

// Minus
const minus = (a, b = 0) => !b ? -a : a - b;



Arith.minus = minus;
Arith.sumAll = sumAll;

return Arith;
})(typeof(Arith) === 'undefined' ? {} : Arith);
