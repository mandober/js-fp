/*
It is possible for multiple interfaces to use the same property name
(the same exact string) for different things. But property names can
also be symbols.

SYMBOLS
=======
are values created with the `Symbol` function. Unlike strings,newly 
created symbols are unique (Across what? Source file? Entire codebase?
Entire JS ecosystem?).
*/

let sym = Symbol("name");
console.log(sym == Symbol("name")); // → false

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); // → 55

/*
The string passed to the Symbol fn, called `name`, is included when
the symbol is converted to a string, making it easier to recognize
certian symbols; apart from that, the name has no other meaning;
multiple symbols may have the same name.

Being both unique and usable as property names, makes symbols suitable 
for defining interfaces that use a symbol for their property (method) 
key rather then a (non-unique) string.

A symbol's value is defined by the language and stored as a property 
of the Symbol function. It is a random, very long sequence of characters.
*/

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = () => `${this.length} cm of blue yarn`;

console.log([1, 2].toString());        // → 1,2
console.log([1, 2][toStringSymbol]()); // → 2 cm of blue yarn

/*
It is possible to include symbol properties in object expressions and
classes by using square bracket syntax, which causes the property name
to be evaluated, allowing us to refer to a binding that holds the symbol.
*/

let stringObject = {
    p: 111,
    m1: function(){ return this.p },
    [toStringSymbol]() { return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]()); // a jute rope
console.log(stringObject['m1']());           // 111
console.log(stringObject.m2());              // here

/*
ITERATOR INTERFACE
==================
The object given to a for-of is expected to be iterable, i.e. it has to
contain a method referable by the `Symbol.iterator`. When called, that 
method should return an object carrying the second, iterator interface.
That iteratror iface is the actual thing that iterates the object.

It comes with the `next()` method that returns the result object on each
call. The result object has the `value` and `done` properties; the former's
value is the current element of iteration, and while there are more elements
available, the latter property's value is `false`. Upon completion, the result
object has the `value` key set to `undefined` and `done` key to `true`. The
iterator keeps returning this last object for any subsequent `next()` calls.  

The `next()` method's name, the `value` and `done` property keys are strings,
(not symbols); only Symbol.iterator, which is likely to be added to a lot of
different objects, is a symbol.
*/

// The iterator iface can be directly used to iterate over...
"abcdefg"[Symbol.iterator]();  // ...strings
[1,2,3,4][Symbol.iterator]();  // ...arrays

// The result object:
let it = "OK"[Symbol.iterator]();
console.log(it.next()); // { value: "O", done: false      }
console.log(it.next()); // { value: "K", done: false      }
console.log(it.next()); // { value: undefined, done: true }

// for..of auto-iterates over all elements:
let iter = [1,2,3,4][Symbol.iterator]();
for (let v of iter) console.log(v);
