'use strict';
const concatAll = require('./index');

var a = [ [1,2], [3,4], [5,6]];
var aa = concatAll(a);
console.log('aa: ', aa);

var b = [[1, 2], [3, 4], [], [5, 6], [7], [8,9,10]];
var bb = concatAll(b);
console.log('bb: ', bb);

var c = [[1, [2, 3]], [4], [], [5, 6], [[7], [8, 9, 10]]];
var cc = concatAll(concatAll(c));
console.log('cc: ', cc);

var d = [].concat([22, 33], [44, [88], 55], [66, 77]);
console.log(d);
