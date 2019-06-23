/*
  Function composition

  Defining compose function to aid n-fold compositions.
  Composition is annotated as `∘` in infix position:
    (f ∘ g) x = f(g(x))
  and it is associative.

  In Lambda Calculus composition combinator is named "Bluebird"
  after Curry's B-combinator.

*/


// ===========================================================================
// Road to sayan level of composing.

// ~~~ STEP 1 ~~~
// friendly compose, Composey McComposeface
let Composey = (f, g) => x => f(g(x));
// x is the value being piped through f and g

let toUpperCase = x => x.toUpperCase();
let exclaim = x => `${x}!`;

let shouts = x => exclaim(toUpperCase(x)); // no compose: IN TO OUTSIDE
let shout = Composey(exclaim, toUpperCase); // compose: RIGHT TO LEFT
shout('terminator'); // "TERMINATOR!"

// g runs before f, creating RTL data flow

// but flow direction sometimes matters:

let head = x => x[0];
let reverse = reduce((acc, x) => [x].concat(acc), []);

let last = Composey(head, reverse);
last(['jumpkick', 'roundhouse', 'uppercut']); // 'uppercut'

// Property that holds for any composition:
// ASSOCIATIVITY: C(f, C(g, h)) === C(C(f, g), h)
// i.e. it doesn't matter how two compositions are grouped
Composey(toUpperCase, Composey(head, reverse));
// or (the same result):
Composey(Composey(toUpperCase, head), reverse);


// ~~~ STEP 2 ~~~
// Since result is the same, regardless of compose grouping, so
// associativity allows us to write a variadic compose.

// Before, we had to write two composes, but due to associativity we can
// give to `compose` multi fns and let it decide how to group them:
const arg = ['jumpkick', 'roundhouse', 'uppercut'];
const lastUpper = Composey(toUpperCase, head, reverse);
const loudLastUpper = Composey(exclaim, toUpperCase, head, reverse);

lastUpper(arg); // 'UPPERCUT'
loudLastUpper(arg); // 'UPPERCUT!'



// ===========================================================================


// Compose a unary fn with itself n times
// foldn(f=S, n=3, x=0) = S(S(S(0)))
const foldnIter = f => n => x => {
  while (n-- > 0) {
    x = f(x);
  }
  return x;
};
console.log(foldnIter(x=>x+1)(3)(0));


// rec ternary fold
const foldn = (f, n, x) =>
  n === 0 ? x : foldn(f, --n, f(x));

console.log(foldn(x=>x+1, 5, 0));


// rec binary fold
function folder(f, n) {
  return function foldi(x) {
    return (n-- === 0) ? x : foldi(f(x));
  };
}

console.log(folder(x=>x+1, 3)(3));


// λfgx.fx(gx)
// 𝜆𝑥𝑦𝑧.𝑥𝑧(𝑦𝑧)
const G = f => g => x => f(x)(g(x));



// sayan compose
const compose = (...fns) =>                 // fns to compose (RTL)
  (...args) =>                              // args
    fns.reduceRight(                        // reduceRight array of fns
      (acc, curr) =>                        // accumulator, currentFn
        [curr.call(null, ...acc)]           // currFn(...acc)
        , args)                             // initial acc value
    [0];                                    // whose 1st element?

// compare with pipe
const pipe = (...fns) =>                    // fns to pipe through (LTR)
  x =>                                      // arg
    fns.reduce(                             // reduce array of fns
      (acc, curr) =>                        // accumulator, currentFn
        curr(acc)                           // currFn(accumulator)
        , x);                               // initial accumulator value
