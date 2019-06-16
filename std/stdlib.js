/*
stdlib - utilities and helpers.
*/
'use strict';
/*
    (function(g) {
        console.group("Recursion!");
        console.log("* Iteration vs recursion");
        console.log("* Direct recursion");
        console.log("* Branching/Path");
        console.log("* Mutual recursion");
        console.log("* Tail-call");
        console.log("* Trampoline");
        console.log("* Y combinator");
        console.groupEnd("Recursion!");
        return g.l = l;
    })(typeof(g) === 'undefined' ? {} : g);
*/

// Console logging
const l = x => console.log(x.toString() ,x);
const j = x => console.log(JSON.parse(JSON.stringify(x)));

// Arith
const add = a => b => a + b;  // curried add
const add2 = (a, b) => a + b;

// Info
const getClass = x => Object.prototype.toString.call(x).split(/[ \]]/)[1];

// helpers
let a = [1, 2, 3]
let ([first, ...rest]) = headTail(arr) // -> [1, [2, 3]]
let [h, t] = headTail(a);

let head = car = ([head, ]) => head;
let tail = cdr = ([_, ...tail]) => tail;

let first = arr => arr[0];

let last  = arr => arr[-1];
let headTail = ([head, ...tail]) => [head, tail];
