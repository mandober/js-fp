/*
Trampoline in JS
================

https://blog.logrocket.com/using-trampolines-to-manage-large-recursive-loops-in-javascript-d8c9db095ae3/


Trampoline wraps a recursive function, calling it piece by piece (thunk by
thunk), until it stops returning thunks (but a non-fn value).

Flow:
- Trampoline wraps around a recFn, (in `fn` param) returning a new fn.
- Within the new function, the recFn is initially called with its provided args.
  (and the return value/funcation is assigned to `thunk`)
- We keep calling recFn as long as it keeps returning fns (we'll also call).
- Once recFn resolves into a value, the loop stops and that value is returned.

Preparation for trampoline:
- In order to exploit the trampoline, recFn needs to return a thunk (nullary
  function) in the recursive case.
- the thunks recFn returns, are then managed by the trampoline (in while loop).
- Instead of (recursively) calling itself, recFn now only returns a thunk, and
  trampoline controls the flowby deciding when to issue the next call to recFn.
- This provides continuous recFn invoking without the risk to the call stack.

*/

//
// The trampoline
//
const trampoline = fn => (...args) => {
    let thunk = fn(...args);
    // keep calling thunk until it stops returning fns
    while (typeof thunk === 'function')
        thunk = thunk();
    // then return the final value/thunk
    return thunk;
}


//
// Preparing a rec fn: first for tail-calls, then for trampolining
//

// 1: naive rec fn
const naive = n =>
    n === 0
        ? 0
        : n + naive(n - 1);

// 2: rec fn with a tail-call
const tco = (n, acc = 0) =>
    n === 0
      ? acc
      : tco(n - 1, acc + n);

// 3: rec fn with a thunk (modified for trampolining)
const jump = (n, acc = 0) =>
    n === 0
      ? acc
      : () => jump(n - 1, acc + n);
// Instead of recursively calling itself, now it just returns a thunk


//
// Run it:
//
console.log(`Naive: ${naive(10)}`);
console.log(`TCOed: ${tco(10)}`);
console.log(`Tramp: ${trampoline(jump)(10)}`);
