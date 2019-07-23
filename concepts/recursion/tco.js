'use strict'

/* Tail-call optimization (TCO)

TCO is a required part of the ES2015 (ES6) spec. So supporting it isn't a NodeJS
thing, it's something the V8 JavaScript engine that NodeJS uses needs to support.

As of Node 8.x, V8 doesn't support TCO, not even behind a flag.
Node 7.10 down to 6.5.0 at least supported TCO behind a flag:
`--harmony` in 6.6.0 and up, `--harmony_tailcalls` earlier,
in strict mode only.

To check,use the tests from node.green:

===== TCO WAS DEPRECATED IN Node v.8.0+ =====

*/

/*
function direct() {
    "use strict";
    return (function f(n) {
      if (n <= 0) return  "foo";
      return f(n - 1);
    })(1e6) === "foo";
}

function mutual() {
    "use strict";
    function f(n) {
      if (n <= 0) return "foo";
      return g(n - 1);
    }

    function g(n) {
      if (n <= 0) return "bar";
      return f(n - 1);
    }

    return f(1e6) === "foo" && f(1e6+1) === "bar";
}

console.log(direct());
console.log(mutual());
*/


/*
$ node --harmony_tailcalls tco.js
# or:
$ node --harmony tco.js

# should return:
true
true
*/



const arr = [1, 2, 3];

// Get size of the array recursively

// Not PTC cuz of "1 + ..." part in the last rec call, 1 + size(xs)
const size = ([ x, ...xs ]) =>
    x === undefined ? 0 : 1 + size(xs);


// Proper Tail Call
const ptc = ([ x, ...xs ], acc = 0) =>
    x === undefined ? acc : ptc(xs, ++acc);
// console.log(ptc(arr));


const tcofac = (x, acc = x) => x === 1 ? acc : tcofac(--x, acc * x);
// console.log(tcofac(5));

/*
fac(5, 5)
fac(4, 5*4)
fac(3, 5*4*3)
fac(2, 5*4*3*2)
fac(1, 5*4*3*2*1)
*/
