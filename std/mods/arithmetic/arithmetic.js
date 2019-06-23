/*
ARITHMETIC
==========

Natual numbers ℕ
================
0 ∈ ℕ
n ∈ ℕ . S(n) ∈ ℕ

Successor
=========
S(0) = 1
n ∈ ℕ . S(n+1) = S(S(n))

*/
'use strict';

// succ :: number -> number
const succ = n => ++n;

// pred :: number -> number
const pred = n => --n;

// add1 :: number -> number -> number
const add1 = a => b => a + b;
add1.arity  = 1;
add1.input  = 'number';
add1.output = 'number -> number';
add1.type   = 'number -> number -> number';

// add2 :: (number, number) -> number
const add2 = (a, b) => a + b;
add2.arity = 2;
add2.input = '(number, number)';
add2.output = 'number';

const binop = op => (a, b) => {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "**": return a ** b;
        case "/": return a / b;
        case "//": return Math.floor(a / b);
    }
};

var op = binop('//');
console.log(op(5, -2));

module.exports = {succ, pred, add1, add2, binop};
