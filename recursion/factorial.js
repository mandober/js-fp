/*  Factorial

ax1: 0! = 1
ax2: (n+1)! = (n+1) * n!
ax3: n >= 0

e.g. 7! = (6+1)! = (6+1) * 6! = 7*6!
*/


// Iterative version
const fac_iter = (x, acc = 1) => {
    while (x > 0) acc *= (x--);
    return acc;
};
console.log(fac_iter(5));

// Recursive rushed version
const fac = x => x < 2 ? 1 : x * fac(--x);
console.log(fac(5));
console.log(fac(20)); // 2432902008176640000

// Recursive TCO version
const fac_tco = (x, acc = x) => x === 1 ? acc : fac_tco(--x, acc * x);
console.log(fac_tco(5));
console.log(fac_tco(21)); // 51090942171709440000

// Map-reduce version
const fac_map = x =>
    Array.from({length: x})
         .map((_, i) => i + 1)
         .reduce((acc, x) => acc * x);

console.log(fac_map(5));

// Reduce version
const fac_reduce = x =>
    Array.from({length: x})
         .reduce((acc, _, i) => acc * (i+1), 1);

console.log(fac_reduce(5));

// As a single expr
(function fac(x) {
    return x < 1 ?
        1 :
        x * fac(x-1)
})(5)
