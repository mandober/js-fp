/*
ALGORITHM ANALYSIS
==================
Analyzing algorithmic complexity

Time complexity
===============

Constant: O(1)
- does not change with respect to input space
- e.g. accessing an item in an array by its index

Logarithmic: O(log n)
- logarithmic time complexity, "halving"
- O(lg n) inverse of quadratic (exponential) time, (lg = log base 2)
- e.g. finding alelement in a BST
- lg(1,000,000) = 19.9315686 ~= 20

Square root: O(sqrt(n))
- Time Complexity: square root of n

Linear: O(n)
- algorithms that must do n operations in the worst-case scenario
- e.g. searching for an item in an unsorted array

Quadratic: O(n^2)
- quadratic time complexity
- inverse of logarithmic time complexity, O(log_2 n)
- quadratic time is exponential time with k=2

Cubic: O(n^3)
- cubic time complexity
- cubic time is exponential time with k=3

Exponential: O(n^k)
- exponential time complexity

Polynomial: O(n^k + n^k-1 + ... + n)
- polynomial time complexity
- polynomial of degree 2: an^2 + bn + c        -> O(n^2)
- polynomial of degree 3: an^3 + bn^2 + cn + d -> O(n^3)
- if polynomial of degree k, then O(n^k)

Infinite: O(∞)
- diverging function, infinite loop




Big O notation
==============
- asymptotic complexity

f(n)       : algorithm's complexity with n inputs
f(n)_time  : represents the time needed for computation of the algo.
f(n)_space : represents the space (additional memory) needed for the algorithm.

The goal of algorithm analysis is to get algo's efficiency by calculating f(n),
or at least the Big-O notation, which has the following rules:

Coefficient rule
- If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0
- this rule eliminates coefficients (constants) not directly related to n
- because as n grows the constants becomes negligible

Sum rule
- If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n))
- states that time complexities can be added
- states that Big-O is summed when the time complexities are summed
- i.e. if the resultant time complexity is a sum of two different time
  complexities, the resultant Big-O is also sum of two Big-O notations

Product rule
- If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))
- states that time complexities can be multiplied
- states that Big-O is multiplied when the time complexities are multiplied

Transitive rule
- If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n))
- states that the same time complexity has the same Big-O

Polynomial rule
- If f(n) is a polynomial of degree k, then f(n) is O(nk)
- Intuitively, the polynomial rule states that polynomial time complexities
  have Big-O of the same polynomial degree.

Log of a power rule
- log(nk) is O(log(n)) for any constant k > 0.
- With the log of a power rule, constants within a log function are also
  ignored in Big-O notation.

*/
const printPrimeCandidates = k => {
    console.log(2, 3, 5, 7);
    for (let i=3; i <= k; ++i) {
        let m = 5*i;
        console.log(m-4, m-2, m+2, m+4);
    }
}
// printPrimeCandidates(30);

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // This is checked in order to skip middle five numbers in the loop
    if (n % 2 == 0 || n % 3 == 0) return false;

    // i = 5, 11, 17, 23, 29, 35,...
    for (var i=5; i*i <= n; i+=6) {
        if (n%i === 0 || n%(i+2) === 0) return false;
    }

    return true;
}
// console.log("isPrime(35): " + isPrime(35));

const keepPrimes = arr => arr.filter(el => isPrime(el));
//console.log(keepPrimes([...Array(200).keys()]));
