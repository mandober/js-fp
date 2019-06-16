'use strict';

let pc = require('./get-prototype-chain');

console.log('pc(Function): ', pc(Function));
console.log('pc(Function.prototype): ', pc(Function.prototype));


let o = {
    a:1,
    name:"o"
}
console.log('Object.getPrototypeOf(o): ', Object.getPrototypeOf(o)); // {}

console.log('pc(o): ', pc(o));

let n = Object.setPrototypeOf({}, o);
n.name = "n"
console.log('Object.getPrototypeOf(n): ', Object.getPrototypeOf(n));

let pn = pc(n);
console.log('pc(n): ', pc(n));

let gop = Object.getOwnPropertyNames(pn[2]);
console.log('gop: ', gop);