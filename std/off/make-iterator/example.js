var MakeIterator = require('../');

var obj = {
    a: 11,
    b: 22,
    c: 33,
    [Symbol.iterator]() {
        return new MakeIterator(Object.keys(obj));
    }
};

// now iterate with for...of loop
for (var v of obj) {
    console.log(v, ': ', obj[v]);
}

// or
var it = obj[Symbol.iterator]();
console.log('it.next()', it.next())
console.log('it.next()', it.next())
console.log('it.next()', it.next())
console.log('it.next()', it.next())
