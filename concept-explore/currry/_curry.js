/*
CURRYING
========


ARITY
- Function's arity is the number of declared formal params, ϰ
- Generally, a fn of arity n (ϰ = n) is n-ary; its formal params form n-tuple
- Smaller arities are named:
  - ϰ = 0, nullary, 0-ary: 0-tuple, no formal params
  - ϰ = 1, unary,   1-ary: 1-tuple
  - ϰ = 2, binary,  2-ary: 2-tuple
  - ϰ = 3, ternary, 3-ary: 3-tuple
- In JS, every fn has `length` property that returns ϰ

JS allows calling a fn with num of args not matching num of params
  * If less args then params, the missing ones are `undefined`
  * If more args then params, the extras are ignored
  * Inside fn, all args are in `arguments` (deprecated), which is "array-like"
  * Inside fn, the name of the callee is in `arguments.callee` (deprecated)
  * 'caller', 'callee', and 'arguments' properties may not be accessed on
    strict mode functions or the arguments objects for calls to them.

RATIONALE
- Contrary to the unary, some functions accept an n-tuple of params.
- Create a function that will accept such an n-tuple function and
  convert it into a sequence of unary functions.

GOAL
  (a1, ..., aN) => {...} -> a1 => ... => aN => {...}

All these will fix just the 1st param:
  curriedAdd(1);
  curriedAdd(1)();
  curriedAdd()(1)()();

*/

const cur = (f, arr = []) =>
  (...args) =>
    (a =>
      a.length === f.length ? f(...a) : cur(f, a)
    )([...arr, ...args]);


// CURRY: recursive auto-curry version
const curryAuto = (f, arr = []) =>
  (...args) => g =>
    g.length === f.length ? f(...g) : curryAuto(f, g)
([...arr, ...args]);


// CURRY: expanded version
const curryExp = (f, initialParams = []) => {
  return (...nextParams) => {
      const curriedFunction = (params) => {
          if (params.length === f.length)
            return f(...params);
          return curryExp(f, params);
      };
      return curriedFunction([...initialParams, ...nextParams]);
  };
};


// CURRY alt.1
const curryAlt1 = f => {
  const arity = f.length;
  var innerCurry = (...args) =>
    args.length < arity
      ? innerCurry.bind(null, ...args)
      : f.call(null, ...args);
  return innerCurry;
}


// CURRY alt.2
function curryAlt2(fn) {
    const arity = fn.length;
    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }
        return fn.call(null, ...args);
    };
};


/*
const match   = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter  = curry((f, xs) => xs.filter(f));
const map     = curry((f, xs) => xs.map(f));
*/


/*
collect arg n-tuple + another single arg
var t = (...a) => f => a.map(f);
t(1,2,3,4,5)   -> f => a.map(f);
t(1,2,3)       -> f => a.map(f);
t(1)(4)        -> a.map(f);
t(1,2)(4)      -> a.map(f);
*/

// =============================================================================
// recursive autocurry exam
// =============================================================================
const ac = (f, arr = []) => (...args) => g =>
  g.length === f.length ? f(...g) : ac(f, g)([...arr, ...args]);


// test ac
let a3 = (a, b, c) => a + b + c;
let a3c = ac(a3);

console.log(
  a3c(3)(4)(2)
);


/*

add3 =
( f= (a,b,c)=>a+b+c), arr = [] ) =>
  (...args) => g => g.length === f.length ? f(...g) : autocurry(f, g)
  ([...arr, ...args]);

add3 =
(...args) => g => (g.length === 3 ? f(...g) : autocurry(f, g))
  ([...arr, ...args]);


f        : (a,b,c) => a+b+c
f.length : 3
arr      : []
args     : []
ac(f, g) : ac((a,b,c)=>a+b+c, g)


*/
