# Properties

identifier: names | symbols | both (names and symbols)
access: enumerable | present (enumerable and innumerable)
ownership: own | all (own and delegated)


```js

in
"prop" in obj
// identifier: both (names and symbols)
// access: present (enumerable and innumerable)
// ownership: all (own and delegated)

for...in
// identifier: both (names and symbols)
// access: present (enumerable and innumerable)
// ownership: all (own and delegated)
for (prop in obj)
// Iterates over the properties of an object, in original insertion order.
// Properties closer to the object in the prototype chain override prototypes' properties.


for...of
// identifier: names only
// access: enumerable only
// ownership: all (own and delegated)
for (prop of obj)
// iterating over iterable objects (including Array, Map, Set, String, TypedArray, arguments object and so on),
// invoking a custom iteration hook with statements to be executed for the value of each distinct property.
// The for...of syntax is specific to collections, rather than all objects. It will iterate in this manner over
// the elements of any collection that has a [Symbol.iterator] property. Excludes symbols.

Object.keys()
// returns an array of a given object's OWN ENUMERABLE properties, in the same order as that provided by a
// for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
Object.values()
Object.entries()


Object.getOwnPropertyNames()
// returns an array of ALL properties (enumerable or not) found directly upon a given object.
Object.getOwnPropertySymbols()
// returns an array of all symbol properties found directly upon a given object.



Reflect.getOwnKeys()
// An Array of the target object's own property keys.
// Sort of like union of the above 2

Reflect.get(target, propertyKey[, thisArg])
// The static Reflect.get() method works like getting a property from an object (target[propertyKey])


Reflect.has(target, propertyKey)
// The static Reflect.has() method works like the in operator as a function.
// Return value: A Boolean indicating whether or not the target has the property.
Reflect.has([], 'length')

// Reflect.hasOwnProperty() // inhertited from Object.prototype
Reflect.hasOwnProperty.call(a, 'x') // true

Object.getOwnPropertyDescriptor();
Object.getOwnPropertyDescriptors();
```

- own vs. delegated
  own (object's own props) vs. all available (object's own + those available through prototype chain):
- name vs. symbol prop
- data vs. accessor props
  data props, method props. get/set methods
- props vs. methods


object's own props:
- gp: getOwnProperties
- gop: getOwnProperties: all (enumerable or not) props
- goep: getOwnEnumerableProperties: just enumerable props
- goip: getOwnInnumerableProperties: innumerable props

object's all (up the prototype chain) props:
ga: get all
- gap: all (enumerable or not) props
- gaep: just enumerable props



Object.define