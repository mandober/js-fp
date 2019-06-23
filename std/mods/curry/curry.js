'use strict';
/**
 * Curry accepts an n-ary fn and returns a (sequence of n) unary fn,
 * which accept args one by one rather then all at once.
 *
**/

/**
 * curry: f ->
**/
const curry = (f, arr = []) =>
  (...args) =>
    g =>
      g.length === f.length
        ? f(...g)
        : curry(f, g)
  ([...arr, ...args]);


module.exports = curry;

/**
 * ES5 version of above
 *
 * `curryExpanded`
 *    wrapper fn that accepts a n-ary fn as `originalFunction` param and
 *    remembers it (as a closure for inner fns). It inits an empty array
 *   `initialParams`, and returns `getNextParams` inner fn.
 *
 * `getNextParams`
 *
 */
function curryExpanded(originalFunction, initialParams = []) {
  return function getNextParams(...nextParams) {
      function curriedFunction(params) {
          if (params.length === originalFunction.length) {
              return originalFunction(...params);
          }
          return curryExpanded(originalFunction, params);
      };
      return curriedFunction([...initialParams, ...nextParams]);
  };
};


