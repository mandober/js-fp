'use strict';
const isPojo = require ("./");

var x = {
    a: 1,
    b: [23, 33, 38],
    c: {
        d: [4, 9, 8],
        e: 5,
        f: {
            g: 6,
            h: {
                i: 7,
                j: 8
            }
        },
        k: 8
    },
    l: 9,
    m: function () { },
    n: /[?:]/,
    o: "abcd",
    p: 1123,
    q: 11.21,
};


isPojo(x); //?
isPojo(x.b); //?
isPojo(x.l); //?
isPojo(x.m); //?
isPojo(x.n); //?
isPojo(x.o); //?
isPojo(x.p); //?
isPojo(x.q); //?

var m = new Map();
m.set({}, 1);
isPojo(m); //?

var s = new Set();
s.add({});
isPojo(s); //?
