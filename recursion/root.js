/*      Arithmetic: estimate square root using Heron's method

```scheme
(define (sqrt x)
  (define (improve guess)
    (/ (+ guess (/ x guess)) 2.00))
  (define (good? guess)
    (< (abs (- (* guess guess) x)) .001))
  (define (try guess)
    (if (good? guess)
        guess
        (try (improve guess))))
  (try 1.00))
```

Given anumber n calculate its square root, x, using Heron's method:
- take a (wild) guess, or just let a guess always be 1, x' = 1
- define the range of acceptable error as ϵ.
  e.g. ϵ <= 0.01 so that (n - x*x) <= ϵ
- drive the "guess" closer to solution by improving the guess:
  - get the average between n and previous guess
  g' is an improved guess: g' = (g + (n / g)) / 2
- improved guess: previous guess + the mean of n and previous guess


```scheme
(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (improve g x)
  (average g (/ x g)))

(define (good-enough? g x)
  (< (abs (- (square g) x)) 0.001))

(define (sqrt-iter g x)
  (if (good-enough? g x)
    g
    (sqrt-iter (improve g x) x)))
```


*/


/*
 * Approach #1: Separated functions
 */
const avg = (...x) => x.reduce((a,b) => a+b) / x.length;

// (define (sqrt x) (sqrt-iter 1.0 x))
const sqrt = x => sqrtIter(x);

// (define (improve g x) (average g (/ x g)))
const improve = (g, x) => avg(g, x/g);

// (define (good-enough? g x) (< (abs (- (square g) x)) 0.001))
const isGood = (g, x) => Math.abs(g*g - x) < 0.001;

// (define (sqrt-iter g x)
//   (if (good-enough? g x)
//       g
//       (sqrt-iter (improve g x) x)))
const sqrtIter = (x, g = 2) => isGood(g, x) ? g : sqrtIter(x, improve(g, x));


console.log("sqrt(2): " + sqrt(2));  // 1.4142156862745097
// console.log("sqrt(25): " + sqrt(25)); // 5.000012953048684
// console.log("sqrt(20): " + sqrt(20)); // 4.472137791286727


/*
 * Approach #2: Lisp-y
 * Return a function "wound up" to immediately call itself
 */
function getSqrt(x) {
    return (function sqr(g) {
        return (Math.abs(g*g-x) < 0.001)
            ? g
            : sqr((g+x/g)/2); // rec
    })(1);
}

// console.log("getSqrt(5): " + getSqrt(5));


const Sq = x =>
    (function sroot(g) {
        return (Math.abs(g*g-x) < 0.001)
            ? g
            : sroot((g+x/g)/2); // rec
    })(1);

// console.log("Sq(9): " + Sq(9));


const sq2 = x =>
    (sr2 = g => (
        (Math.abs(g*g-x) < 0.001)
            ? g
            : sr2((g+x/g)/2) // rec
        )
    )(1);

// console.log("sq2(36): " + sq2(36));


// REDUX
const sqq = (x, g = 1, e = 0.001) =>
    Math.abs(g * g - x) < e
        ? g // g.toFixed(5)
        : sqq(x, (g + x / g) / 2);

console.log("sqq(49): " + sqq(49));

