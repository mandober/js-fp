'use strict';
const isPojo = require("../is-pojo");


function getAllKeys(obj, keyz = []) {
    // iterate by each prop of object
    for (let i of Reflect.ownKeys(obj)) {
        // if value of current key is a primitive or nested object:
        if (isPojo(obj[i])) {
            // value of current key is an object:
            // add key current and...
            keyz.push(i);
            // ...recursevly call this func with current level of nesting and keys collected so far
            getAllKeys(obj[i], keyz);
        } else {
            // if prop value is a primitive, just copy the value.
            // (if prop value is a function, it will be copied by reference)
            keyz.push(i);
        }
    }
    return keyz;
};

var o = {
    a: 1,
    b: [23, 33, 38],
    c: {
        d: [4,9,8],
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
    m: function() {},
    n: /[?:]/,
};

"length" in Object.getOwnPropertyNames(o); //?
"length" in Reflect.ownKeys(o); //?
Reflect.ownKeys(o).includes("length"); //?

isPojo(o); //?
isPojo(o.b); //?
isPojo(o.m); //?
isPojo(o.n); //?
o.b; //?

o;
getAllKeys(o); //?

Reflect.ownKeys(o); //?

