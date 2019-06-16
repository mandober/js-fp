/*
 Main JS File - entry JS file


const dir_src = './src/';
const curry = require(dir_src + 'curry');

// 3-ary function:
let a3 = (a, b, c) => (2**a * b + 1) / (c + a * b);
// a3c(2)(3)(4);

// 3-ary function - curried:
let a3c = curry(a3);

// 3-ary function curried - call it:
let output = a3c(2)(3)(4);
console.log(output);


// let output = a => b => a;
// console.log(info(output));

*/


// permut

// (n/m) = n!/m!(n!-m!)
