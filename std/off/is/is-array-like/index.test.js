const isArrayLike = require ("./");

var s = { 0: 0, 1: 1, length: 2 };
isArrayLike(s); //?
Array.from(s); //?

var y = { 0: 0, 1: 1, length: 3 };
Array.from(y); //?

var y = { length: 3 };
Array.from(y); //?

Reflect.ownKeys(s); //?

var i = { 0: 0, 1: 1, 2: 2, 3: 3, length: 3 }; //! length shrinks the array as usual
isArrayLike(i); //?
Array.from(i); //?

var k = Reflect.ownKeys(i); //?
var nk = k.filter((el) => Number.isSafeInteger(Number(el)));
nk; //?