/*
Fibonacci numbers

The Fibonacci numbers form a sequence, called the Fibonacci sequence, such that
each number is the sum of two preceding numbers, starting with 0 and 1.

Mathematical definition (primitive recursion) of n-th Fibonacci number:

     ↗ fib(0) = 0
F(n) → fib(1) = 1
     ↘ fib(n) = fib(n-1) + fib(n-2)       where n > 1

Fibonacci series, F:
0.1.2.3.4.5.6|..7..8..9|.10.11|..12..13..14..15..16|...17...18...19...20|....21
0|1|1|2 3 5 8| 13 21 34| 55 89| 144 233 377 610 987| 1597 2584 4181 6765| 10946

F(6) = 8, F(8) = 21, F(F(6)) = 21

F(3) = 2,
F(F(3)) = 1
F(F(F(3))) = 1

F 4 = 3
F F 4 = 2
F F F 4 = 1
F F F F 4 = 1

F 5 = 5     fixpoint
F F 5 = 5
F...F F 5 = 5



The sum of the first n Fibonacci numbers is the (n+2)th Fibonacci number
minus 1 (second identity).
sum(F(n)) = F(n+2)-1
sum(F(8)) = F(8+2)-1 = F(10)-1 = 55-1 = 54



The Fibonacci Quarterly (quaterly magazine)
Articles about topics related to Fibonacci numbers:
- Lucas numbers
- the golden ratio
- Zeckendorf representations
- Binet forms
- Fibonacci polynomials
- Chebyshev polynomials

Other topics, especially those related to recurrences, include:
- primes
- pseudoprimes
- graph colorings
- Euler numbers
- continued fractions
- Stirling numbers
- Pythagorean triples
- Ramsey theory
- Lucas-Bernoulli numbers
- quadratic residues
- higher-order recurrence sequences
- nonlinear recurrence sequences
- combinatorial proofs of number-theoretic identities
- Diophantine equations
- special matrices and determinants
- the Collatz sequence
- public-key crypto functions
- elliptic curves
- fractal dimension
- hypergeometric functions
- Fibonacci polytopes
- graph theory

*/

// sample array, 0...21
const arr = [...Array(22).keys()];


// ============================
// Fibonacci 1: naive recursion
// ============================
const fibNaive = x =>
    x < 2
        ? (x < 1 ? 0 : 1)
        : fibNaive(x - 1) + fibNaive(x - 2);

// arr.forEach(x => console.log(x+":", fibNaive(x)));


// =============================
// Fibonacci 2: mutual recursion
// =============================
const fibMutual = n =>
    n === 0
        ? 0
        : fibMutual(n - 1) + fibMutual1(n);

const fibMutual1 = n =>
    n === 1
        ? 1
        : fibMutual(n - 2);

// arr.forEach(x => console.log(x+":", fibMutual(x)));


// ================================
// Fibonacci 3: tail-call recursion
// ================================
const tcoFib = (n, acc1 = 0, acc2 = 1) =>
    n <=  0 ? 0 :
    n === 1 ? 1 :       //acc2 - acc1 :
    tcoFib(n-1, acc2, acc1+acc2);
    // n < 2
    //     ? (n < 1 ? acc1 : acc2)
    //     : tcoFib(n+1, acc1+1, acc2+2);

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
)(f => le(x => f(f)(x)))
) // 13
