/*
=============================
Factorial
=============================
ax1: 0! = 1
ax2: (n+1)! = (n+1) * n!
ax3: n >= 0

e.g. 7! = (6+1)! = (6+1) * 6! = 7*6!
*/


// =============================
// Factorial 1: iterative
// =============================
const fac_iter = (x, acc = 1) => {
    while (x > 0) acc *= (x--);
    return acc;
};
console.log(fac_iter(5));


// =============================
// Factorial 2: naive recursion
// =============================
const fac = x => x < 2 ? 1 : x * fac(--x);
console.log(fac(5));

// =============================
// Factorial 2.1: as a single expr
// =============================
// ES5
(function fac(x) { return x < 1 ? 1 : x * fac(x-1) })(5); // OK
// ES6
(fac = x => x < 1 ? 1 : x * fac(x-1))(5); // Error

// =============================
// Factorial 3: tail recursion
// =============================
const fac_tco = (x, acc = x) =>
  x === 1
    ? acc
    : fac_tco(--x, acc * x);

console.log(fac_tco(5));


// =============================
// Factorial 4: map-reduce
// =============================
const fac_map = x =>
  Array.from({length: x})
       .map((_, i) => i + 1)
       .reduce((acc, x) => acc * x);

console.log(fac_map(5));


// =============================
// Factorial 5: reduce
// =============================
const fac_reduce = x =>
  Array.from({length: x})
       .reduce((acc, _, i) => acc * (i+1), 1);

console.log(fac_reduce(5));

// ========================================
// Factorial 6: recursion with Y combinator
// ========================================
(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(le => (f => f(f)
        )( f => le(x => f(f)(x)) )
 ) // 13
