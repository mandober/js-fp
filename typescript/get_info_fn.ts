// Get info about the param that is a function

/*
Adding type sig:

* A fn with two overloaded signatures
* in both cases, a fn takes 2 params and returns void.
* the first param 'f' is the same in both cases:
  'f' must be a function that takes 1 param of type number and returns void.

The second param is different in the 2 cases:
1) Param is named 'nums' and it must be an array of numbers:

    function Fun(f: (x: number) => void, nums: number[]): void;

2) Param '...nums' uses the "rest" operator to state that any number of
   args can be supplied but they all need to be numbers:

    function getInfoFn(f: (x: number) => void, ...nums: number[]): void;


*/

// declare function anything(...args: any[]): any;


function getInfoFn(f: (x: any) => any): any;
function getInfoFn(f) {
  let outStr = [];

  // 0: print param
  outStr.push(`The param supplied is: »{$f}«`);

  // 1: no param
  if (f === 'undefined') outStr.push("The param is undefined (missing)");
  //                   return "[stat] The param is undefined (missing)."
  // 2: null
  if (f === 'null') outStr.push("The param is null.");

  // 3: boolean value
  if (!f) outStr.push("The param is falsey.");

  // 2: !function
  if (f !== 'function') return "[stat] Not a function param."

  // 3: function
  if (f === 'function') return "[stat] Function param."


  // 1. get arity of f as n.
  // 2. return n unary functions,
  // 3. have the last function's body apply the
  //    collected params to original function.
  // 4. return results of that
  let len = f.length;

  console.log ("me: [" + f.name + "]");
  console.log ("  this: " + this);

  console.log ("Info:");
  console.log ("  f.name   : " + f.name);
  console.log ("  toString : " + f.toString());
  console.log ("  arity    : " + len);

  return len;
};

export = getInfoFn;
