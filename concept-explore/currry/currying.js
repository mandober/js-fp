/* CURRYING

Arity
Arity of a function is the number of formal params it declares:
- nullary, 0-ary: 0-tuple, no formal params
- unary,   1-ary: 1-tuple
- binary,  2-ary: 2-tuple
- ternary, 3-ary: 3-tuple
- n-ary: n-tuple


* If less params then declared supplied, the missing ones are assigned "undefined"
* If more params then declared supplied, the extras are ignored, but they can be
  found in the, now deprecated, arguments property of a function, which is an
  array-like structure (with ES6 it is an almost-array structure).

Rationale:
- Contrary to the unary, some functions accept an n-tuple of params.
- Create a function that will accept such an n-tuple function and 
  convert it into a sequence of unary functions.

Strategy:



let f = (a, b, c) => {...}
let g = Curry(f)
//: g = a => b => c => {...}




nAryFunc = (a, b, ..., n) {} ->
a => b => ... => n => {}


*/
let mc = (x) => {
  // 1: no param
  if (x == undefined) return "[stat] Missing param."
  
  //if typeof x.inspect === 'function') return x.inspect();


  // 1. get arity of f as n.
  // 2. return n unary functions,
  // 3. have the last function's body apply the 
  //    collected params to original function.
  // 4. return results of that
  let len = f.length;
  
  console.log ("this: " + this);
  console.log ("me: [" + mc.name + "]");
  console.log ("Received a function as param f, info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};




let a3 = (a, b, c) => (2**a * b + 1) / (c + a * b);

let ca3 = mc(a3);

//console.log(ca3(2)(3)(4));


/*
2**a * b + 1 / (c + a * b) =
2**2 * 2 + 1 / (2 + 2 * 2) =
x / 6 = 8.166666...
49 / 6

(2**a * b + 1) / (c + a * b) =
(2**2 * 2 + 1) / (2 + 2 * 2) =
9/6 = 1.5


*/











function curry(fn) {
    const arity = fn.length;

    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }
        return fn.call(null, ...args);
    };
};

const match   = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter  = curry((f, xs) => xs.filter(f));
const map     = curry((f, xs) => xs.map(f));








// collect arg n-tuple + another single arg
var t = (...a) => f => a.map(f);
t(1,2,3,4,5)   -> f => a.map(f);
t(1,2,3)       -> f => a.map(f);
t(1)(4)        -> a.map(f);
t(1,2)(4)      -> a.map(f);






0.
// recursive autocurry
const autocurry = 
(f, arr = []) => 
  (...args) => g => g.length === f.length ? f(...g) : autocurry(f, g)
([...arr, ...args]);

1.
add3 = autocurry((a,b,c)=>a+b+c);

2.
add3 = ( f= (a,b,c)=>a+b+c), arr = [] ) => 
  (...args) => g => g.length === f.length ? f(...g) : autocurry(f, g)
([...arr, ...args]);

3.
f           : (a,b,c) => a+b+c
f.length    : 3
arr         : []
//args        : []
//autocurry(f, g) : autocurry((a,b,c)=>a+b+c, g)

add3 = (...args) => g => ( g.length === 3 ? f(...g) : autocurry(f, g) )([...arr, ...args]);

4.
r1 = add3(1,2);


       ( 1, 2  )                                                        (arr = [], ...[1, 2])
add3 = (...args) => g => (g.length === f.length ? f(...g) : autocurry(f, g))([...arr, ...args]);

add3 = (1, 2) => g => (g.length === f.length ? f(...g) : autocurry(f, g))([1, 2]);

r1 = g => (g.length === f.length ? f(...g) : autocurry(f, g))([...arr, ...args]);


































var greet = (greeting, first, last) => `${greeting}, ${first} ${last}`;
var curriedGreet = curry(greet);

// all these calls will set just the 1st param:
curriedGreet('1');
curriedGreet('1')();
curriedGreet()('1')()();


// arrow version expanded
const curry2exp = (f, initialParams = []) => {
    debugger;
    
    return (...nextParams) => {
        debugger;
        
        const curriedFunction = (params) => {
            debugger;
            
            if (params.length === f.length)
              return f(...params);
              
            return curry2exp(f, params);
        };
        return curriedFunction([...initialParams, ...nextParams]);
    };
};



const curry3 = f => {
    const arity = f.length;
    
    var innerCurry = (...args) => 
      (args.length < arity) 
        ? innerCurry.bind(null, ...args) 
        : f.call(null, ...args);
      
    return innerCurry;
}


