# `getObjectName()`

The function.name property returns the name of the function.
Property attributes of `Function.name`
Writable      no
Enumerable    no
Configurable  yes


This function will try to return the name of an object as a string.
JS will try to infer the names of functions, including classes and generator functions, and make it available, as a string, through the function's static `name` property. 

```js
Object.name // "Object"
Function.name // "Function"
// etc.
```

Getting the name of any other object is pretty much impossible, nevertheless this is an attempt to get at least those which can be gotten: the names of builtin prototypes objects are derived from the name of their constructor functions.

```js
getObjectName(Object.prototype) // "Object.prototype"
getObjectName(Function.prototype) // "Function.prototype"
// etc.
```


```js
function Person() {
    this.name = name
}

```


Bound function names
Function.bind() produces a function whose name is "bound " plus the function name.

```js
function foo() {}; 
foo.bind({}).name; // "bound foo"
```

