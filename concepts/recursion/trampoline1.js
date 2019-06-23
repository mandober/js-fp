/*
Trampoline in JS


- TRAMPOLINE is a loop that iteratively invokes thunk-returning fns (continuation-
  passing style).
- A single trampoline can express all control transfers in a program.
- A program so expressed is TRAMPOLINED, or in TRAMPOLINED STYLE.
- Converting a program to trampolined style is TRAMPOLINING.
- TRAMPOLINED FUNCTIONS are used to implement TAIL-RECURSIVE fn calls
  in stack-oriented languages.


https://en.wikipedia.org/wiki/Trampoline_(computing)
https://en.wikipedia.org/wiki/Thunk
https://en.wikipedia.org/wiki/Continuation-passing_style
https://en.wikipedia.org/wiki/Tail-recursive_function


Avoid stack growth via trampolining:
  The idea is to not make the final continuation call inside the function,
  but to exit and to return the continuation to a trampoline.
  That trampoline is simply a loop that invokes the returned continuations.
  Hence, there are no nested function calls and the stack won't grow.


Continuation-passing Style (CPS):
callback-based async programming style in JS

*/

/*
Naive recursion

The immediate consequence of naive recursive implementation is the risk of
overruning the Call Stack - to perform this computation the factorial function
calls itself n times, each time creating a new stack frame. Upon hitting the
base case, the stack frames are popped, one by one, top to bottom, in a process
called 'stack unwinding'. Each popped stack frame holds its own return value,
which is now returned to the caller, with the caller being another "instance"
of the recursive function. It is never the "same" function; a recursive call is
like calling another function that happens to be indentical. When the last value
returns to the "original" function (original instance), gathered returns are
processed and eventually the final value is returned, ending the process.

Lest fail, Call Stack needs to be big enough to accomodate n-stack frames.

The size of the Call Stack has a certian, fixed, value when the function starts
calling itself recursively; and when it does, the stack grows tremendeously
quickly because the new stack frames are continuously being created. Upon
reaching and surpassing the allowed stack space, fatal exeption is triggered,
the OS just kills the faulting process, asks the questions later.

Tail-Call Optimization
======================
when a function returns the result of calling itself, the language doesn’t actually perform another function call, it turns the whole thing into a loop for you.

As written, factorial cannot be optimized because it doesn’t return the result of a function call, it performs a function call and then does something with the result. So it still needs stack frames.

rewrite function into Tail Recursive Form

Well, imagine if we don’t have a hole in a computation to return. In that case, we wouldn’t need to “remember” anything on the stack. To make this happen, we need to either return a value or return the result of calling another function without any further computation.

Such a call is said to be in “tail position” and to be a “tail call.” The “elimination” of tail-call elimination means that we don’t perform a full call including setting up a new stack frame. We perform the equivalent of a “jump.”

If we had an implementation of JavaScript capable of tail-call elimination, we would need to rewrite functions like factorial to take advantage of it. This is easy with a helper function. In production we’d use IIFEs and other techniques to encapsulate things and prevent the creation of a new closure every time we call factorial.

facTailCall()
Now our function either returns a value or it returns the result of calling
another function without doing anything with that result.

we’re basically rewriting this thing into a fold over a lazy sequence!?


TRAMPOLINING
============

When we call a function, it returns a thunk that we call to get a result.
The thunk may return another thunk, so every time we get a result, we need to
check if it's a thunk or the final result.

A thunk is a nullary function, e.g:
    function thunk() {return "thunk!"}


The trampolinefrom Lemonad works provided that you want to trampoline a fn that
doesn't return a function.

*/

// testing stack overflow number:
//    var cnt = x => (console.log(x), cnt(++x))
//    cnt(1); // 12577
//    (function f(x) {console.log(cnt(++x))}(1))


// 1
// naive rec
const factorial = n => n ? n * factorial(n - 1) : 1;

// 2
// TCO
function facTailCall (n) {
  var factco = function myself (acc, n) {
    return n
    ? myself(acc * n, n - 1)
    : acc
  };
  return factco(1, n);
}


// 3
// Lemonad's trampoline
Lemonad.trampoline = function(fun /*, args */) {
  var result = fun.apply(fun, _.rest(arguments));
  while (_.isFunction(result)) {
    result = result();
  }
  return result;
};



// 4
// Rewrite in allong.es style as a function decorator.
// first need install: npm install allong.es
var variadic = require('allong.es').variadic;

var trampoline = function (fn) {
  return variadic( function (args) {
    var result = fn.apply(this, args);
    while (result instanceof Function) {
      result = result();
    }
    return result;
  });
};


// 5
// implementation that is wrapped around a trampolined tail recursive function
function fctrl (n) {
  var _factorial = trampoline( function myself (acc, n) {
    return n
    ? function () { return myself(acc * n, n - 1); }
    : acc
  });
  return _factorial(1, n);
}

fctrl(10);    //=> 362800
fctrl(32768); //=> Infinity



// ============================================================================
// understand-trampoline-in-js
// ============================================================================
// https://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript

function repeat(operation, num) {
  return function() {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn()
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num)
  })
}
