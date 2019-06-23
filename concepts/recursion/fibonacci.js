/*
Fibonacci series:
0 1 2 3 4 5 6 7  8  9  10 11 12  13  14  15  16  17   18   19   20   21
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946
*/

// an array 0-20
const arr = [...Array(22).keys()];

// ============================
// Fibonacci 1: naive recursion
// ============================
const naiveFib = x =>
  x < 2
    ? (x < 1 ? 0 : 1)
    : naiveFib(x-1) + naiveFib(x-2);

// arr.forEach(x => console.log(x+":", naiveFib(x)));


// =============================
// Fibonacci 2: mutual recursion
// =============================
const mutualFib = n =>
  n === 0
    ? 0
    : mutualFib(n -1) + mutualFib1(n);

const mutualFib1 = n =>
  n === 1
    ? 1
    : mutualFib(n - 2);

// arr.forEach(x => console.log(x+":", mutualFib(x)));


// ================================
// Fibonacci 3: tail-call recursion
// ================================
const tcoFib = (x, acc0 = 0, acc1 = 1) =>
  x < 2
    ? (x < 1 ? acc0 : acc1)
    : tcoFib(x + 1, acc0 + 1, acc1 + 2);

console.log(tcoFib(0));
console.log(tcoFib(1));


/*
fibTail(x) {
  return fibTailHelper(ONE, ZERO, valueOf(x));
}

fibTailHelper(acc1, acc2, x) {
  if (x.equals(ZERO)) {
    return ONE;
  } else if (x.equals(ONE)) {
    return acc1.add(acc2);
  } else {
    return fibTailHelper(acc2, acc1.add(acc2), x.subtract(ONE));
  }
}
*/


// ======================================
// Fibonacci: recursion with Y combinator
// ======================================
(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(le => (f => f(f)
        )( f => le(x => f(f)(x)) )
 ) // 13
