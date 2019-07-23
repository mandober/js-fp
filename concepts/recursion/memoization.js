/*
Dynamic Programming in JS

Memoization
===========
Pure function always returns the same output given the same input value.
If a function performs a very costly computation, it would be wasteful to let it perform the computation more than once, when an already encountered input is supplied.


Purity is required if a function is to take advantage of memoization.
Memoization is the technic of implementing a caching mechanism for pure functions, so that its input and output are cached, in appropriate data structure. That way, if the input repeats, the output would be looked up in the cache, rather then recomputed.



 the result of every encountered input value is cached, which can achieve
significant savings if the involved computation is costly.

Suitable data structure for implementing cache may be an array, hashmap, set, or
a similar type, although a map seems to be the most convenient, as we can
associate key/value pair of a map with input/output values of a function.

*/

// We'll start with a naive impl of recursive factorial fn:
const f = x =>
    x < 2
    ? 1           // base case
    : x * f(x-1); // recursive case
/*
JS Map is very suitable for the cache because a key may be any type.
fn's input value will be the key in  map: input := key
fn's result will be the associated value: output := value
    (input, output) -> (key, value)

The strategy:
- initiate a new Map
- key := input
- if (key in map):
  - take its value and return it
- else:
  - compute output
  - insert new: (key, value) = (input, output)
  - return output
*/

console.log("===================================================");

// =======================
// Memoize 1: array storage
// =======================
// array can become very sparse
//
const memo = f => {
    const cache = [];
    return x => {
        return (cache[x] != undefined)
          ? cache[x]
          : (cache[x] = f(x)), console.log(cache), cache[x];
    }
}
/* test it */
let ff = memo(f);
for (let a of [0,1,2,3,4,5,6,6]) {
    console.log("ret: " + ff(a));
}





// ===============================
// Memoization 1: memoize with Map
// ===============================
const memoize = f => {
    // closure provided storage:
    const cache = new Map();

    // return memoized function:
    return (...args) => {
        console.log(cache);
        let key = JSON.stringify(args);
        // If key exists, return its value. Otherwise:
        // call f to compute the value, insert it and
        // then return it (comma returns the last expr)
        return cache.has(key)
            ? cache.get(key)
            : cache.set(key, f(...args)), cache.get(key);
    };
};

/* test it */
// let mf = memoize(f);
// for (let a of [5, 5, 5, 4, 5, 4, 5, 4]) {
//     console.log(mf(a));
// }

console.log("===================================================");



//let sum = (x, y) => x + y;
//let m = new Map;
//let args = [2, 5];
//let key = JSON.stringify(args);
//console.log(key);
//let v = m.has(key) ? m.get(key) : (m.set(key, sum(...args)), m.get(key));




// =================================
// Memoization 2: the memoizer (ES6)
// =================================

// const curryMemoizer = f => {};

const memoize2 = f => {
    const cache = new Map();
    let key;

    return (...args) => {
        // key = stringify args array
        key = console.log(JSON.stringify(args));
        //console.log(key);
        // cache.set(k,v)
        // cache.get(k)

        //val = f(...args);

        //cache[key] = cache[key] || f(...args);

        cache.has(key) ? true : cache.set(key, f(...args))

        return cache.get(key);
    };
};
// const adder = memoize((x, y) => x + y);
// adder(3, 5);



/*
entry:
key     : val
"[3,5]" : 8
"[9,8]" : 17

cache = {
  "[3,5]": 8,
  "[9,8]": 17,
}
*/


// set it up
// const squareNumber = memoize(x => x * x);

// call it
// squareNumber(4); // 16
// squareNumber(4); // 16, returns cache for input 4


// impl memoization
/*

const memoize = (f, cache = {}, argStr = "") => (...args) => {
    argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] || f(...args);
    return cache[argStr];
}({}, "");


mem = (obj, str) => f => (...args) => {
    str = JSON.stringify(args); // args are to be used as key
    obj[str] = obj[str] || f(...args);
    return obj[str];
}({}, "empty");
*/
