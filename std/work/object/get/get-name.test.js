'use strict';
const gon = require('./get-object-name');

// builtins:
console.log('Object:', gon(Object));
console.log('Object.prototype:', gon(Object.prototype));
console.log('Function:', gon(Function));
console.log('Function.prototype:', gon(Function.prototype));

// users:
let my = {
    a: "string",
    get [Symbol.toStringTag]() { return 'my' },
}

console.log('my obj: ', gon(my));
