/* Memoization

Caching mechanism for pure functions only.
A cache is an object that will hold the key/value pairs.

*/
const memoize = (f) => {
  const cache = new Map();
  return (...args) => {
    let key = JSON.stringify(args);
    return cache.has(key)  // if key exists
        ? cache.get(key)   // return its value.
        // otherwise: call f to calc the value; then insert the value, then
        : (cache.set(key, f(...args))
            // then return the value (comma returns second operand)
            , cache.get(key));
  };
};

//let sum = (x, y) => x + y;
//let m = new Map;
//let args = [2, 5];
//let key = JSON.stringify(args);
//console.log(key);
//let v = m.has(key) ? m.get(key) : (m.set(key, sum(...args)), m.get(key));
//console.log(v);



const memoize2 = (f) => {
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


const adder = memoize((x,y) => x +y);
adder(3, 5);
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
const squareNumber = memoize(x => x * x);
// call it
squareNumber(4); // 16
squareNumber(4); // 16, returns cache for input 4


// memoization arrow
const memoize = (f, cache = {}, argStr = "") => (...args) => {
    argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] || f(...args);
    return cache[argStr];
  }({}, "")


mem = (obj, str) => f => (...args) => {
    str = JSON.stringify(args); // args are to be used as key
    obj[str] = obj[str] || f(...args);
    return obj[str];
}({}, "empty");




