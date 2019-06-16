# flatten

`flatten` - flattens a nested array.


DESCRIPTION
-----------

This utility takes a nested, multi-dimensional array and returns a new, flattened array. The second argument to `flatten` can be given as an integer and it will determine the depth by which to flatten the array. This argument is optional and it defaults to `Infinity` i.e. the array will be flattened down to one dimension.


SYNOPSIS
--------

`flatten(ARR, [DEPTH])`

*PARAMETERS:*    <br>
- `ARR`    Array to flatten.     
- `DEPTH`  If integer is specified, the array will be flattened only by the given depth. This argument is optional and it defaults to `Infinity` (i.e. flattens the array to one dimension).

*RETURN VALUE:*    <br>
New, flattened, array; original array is left unchanged.



INSTALLATION
------------
Installation with [npm](https://www.npmjs.com/package/@ilicivan/flatten)

```shell
$ npm install @jsbx/flatten
```

USAGE
-----

```js
var flatten = require('@ilicivan/flatten');

flatten([[1, 2], [3, 4], [5, 6]]);
//=> [1, 2, 3, 4, 5, 6]

flatten([1, [2, [3]], 4, [5]]);
//=> [1, 2, 3, 4, 5, 6]

flatten([1, [2, [3, [4, [5, [6, [7]]]]]]], 1);
//=> [1, 2, [3, [4, [5, [6, [7]]]]]]
```
