'use strict';

// All OWN properties of an object
Object.getOwnPropertyNames(obj);
Object.getOwnPropertyDescriptor(obj, prop);
Object.getOwnPropertyDescriptors(obj);
Object.getOwnPropertySymbols(obj);

// define property(ies)
Object.defineProperty(obj, propKey, propDesc);
Object.defineProperties(obj, propDescObj);

// Protecting objects
Object.preventExtensions(obj)
Object.isExtensible(obj)
Object.seal(obj)
Object.isSealed(obj)
Object.freeze(obj)
Object.isFrozen(obj)

// for..in - all ENUMERABLE properties
let result = [];
for (let p in obj) {
    result.push(p);
}

// for...of
// iterable objects (including Array, Map, Set, String, TypedArray, arguments object and so on),
// invoking a custom iteration hook with statements to be executed for the value of each distinct property.
// In for...of loops, abrupt iteration termination can be caused by break, continue, throw or return.
// In these cases, the iterator is closed.
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value);
}

/*
Difference between for...of and for...in:
* The for...in loop will iterate over all enumerable properties of an object.
* The for...of syntax is specific to collections, rather than all objects. It will iterate
  in this manner over the elements of any collection that has a [Symbol.iterator] property.
*/

// has own property
obj.hasOwnProperty(p);
Object.prototype.hasOwnProperty.call(obj, p);

// is property enumerable
obj.propertyIsEnumerable(p);
Object.prototype.propertyIsEnumerable.call(obj, p);

// Get [[Prototype]]
Object.getPrototypeOf(obj);

// in (all properties: own and delegated)
prop in obj;

// Object.keys (only enumerable own properties)
Object.keys(obj);
