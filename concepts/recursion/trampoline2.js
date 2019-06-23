/*
Trampoline in JS

https://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript


An optimal execution model would be something like a trampoline instead of a
pyramid (as is for recursion), where each recursive call is executed in place,
and does not stack up additional frames. That execution in langs supporting
tail call optimization (TCO) could look like:

(fact 3)                            (factorial 3)
(fact-tail 3 1)                     (* 3 (factorial 2))
(fact-tail 2 3)     instead of:     (* 3 (* 2 (factorial 1)))
(fact-tail 1 6)                     (* 3 (* 2 (* 1 (factorial 0))))
(fact-tail 0 6)                     (* 3 (* 2 (* 1 1)))
6                                   (* 3 (* 2 1))
                                    (* 3 2) = 6

visualizing the stack like a bouncing trampoline:
  ---|---   ---|---   ---|---
---      ---       ---

Instead of executing recursive steps directly, we use a HOF to return a wrapper
function, with another function controling the execution.

`repeat` wraps the regular recursive call with a function, and returns that
function instead of executing the recursive call. It accepts `op` and `n` (as
the number of times to invoke the operation/fn).
*/
function repeat(operation, num) {
    // returns a THUNK (nullary fn to be called later)
    return function thunk() {
        // base case: return (empty-handed) if n = 0 or negative
        if (num <= 0) return;
        operation();
        // recurse until n = 0
        return repeat(operation, --num);
    }
}
/*
The returned fn is the next step of recursive execution and the trampoline is a
mechanism to execute these steps in a controlled iterative fashion, using the
while loop:
*/
function trampol(f) {
    // while param isDefined AND isFunction
    // (the first half is redundant since falsy values are not fns)
    while(fn && typeof(f) === 'function') {
        // call the function, storing the result in `f` param
        f = f();
    }
}
/*
So the purpose of trampoline is to control the execution in an iterative way,
ensureing the stack has only a single frame overhead at any given time.

Althoug safer, trampolining is less performant than simple recursion
since we are "blocking" the normal recursive flow.
*/
let res = (op, n) =>
    trampol(
        () => repeat(op, n)  // trampoline the thunk
    );


// ==================================================

/*
The impl above has two drawbacks (one even harmful):
- The trampoline protocol depends only on functions. What if the result of
  the recursive operation is a function as well?
- You have to apply the recursive function with the trampoline function
  throughout the calling code. This is impl detail that should be hidden.

Essentially trampoline technique deals with lazy evaluation in eagerly
evaluated language, such as JS.

The lazy evaluation takes place locally inside repeat.
Hence your calling code doesn't need to worry about it.

Here is an approach that avoids the mentioned drawbacks:
*/


// a tag to uniquely identify thunks (nullary functions)
const $thunk = Symbol.for("thunk");


// eagerly evaluate a lazy function until the final result
const eager = f => (...args) => {
    let g = f(...args);
    while (g && g[$thunk]) g = g();
    return g;
};


// lift a normal binary function into the lazy context
const lazy2 = f => (x, y) => {
    const thunk = () => f(x, y);
    return (thunk[$thunk] = true, thunk);
};


// the stack-safe iterative function in recursive style
const repeat = n => f => x => {
    const aux = lazy2((n, x) => n === 0 ? x : aux(n - 1, f(x)));
    return eager(aux)(n, x);
};

// run it:
console.log(
    repeat(1e3)(x=>x+1)(0) // 100
);
