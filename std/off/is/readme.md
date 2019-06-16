# is
    
`is` is an object containing methods to identify things.
    
    
## METHODS

primitive, undef, nil,    
boolean, string, symbol    
number, integer, numeric, float, integerIndex,    
object, array, func, pojo    


## METHODS AND THEIR ALIASES   
    
- *`is.undef()`*    
Identify wheteher a value is undefined.    
*ALIASES:* `is.u()`, `is.void()`    
*USAGE:* `is.undef(null); //=> true`    
    
- `is.nil()`    
Identify wheteher a value is undefined.    
*ALIASES:* `is.nill()`, `is.z()`    
*USAGE:* `is.nil(null); //=> true`    
    
- `is.boolean()`    
Identify wheteher a value is boolean.    
*ALIASES:* `is.bool()`, `is.b()`    
*USAGE:* `is.boolean(false); //=> true`    
    
- `is.symbol()`    
Identify wheteher a value is boolean.    
*ALIASES:* `is.sym()`, `is.symb()`, `is.y()`    
*USAGE:* `is.symbol(Symbol('test')); //=> true`    
    
- `is.primitive()`    
Identify wheteher a value is a primitive (undefined, null, boolean, string, symbol, number). Boxed primitives are also identified as primitives.    
*ALIASES:* `is.prim()`    
*USAGE:* `is.primitive(null); //=> true`    
    



## INDEX OF METHODS AND THEIR ALIASES   

```js
is.u = is.void  = is.undef
is.z = is.nill  = is.nil
is.b = is.bool  = is.boolean
is.y = is.sym   = is.symb = is.symbol
is.s = is.str   = is.string
is.n = is.nr    = is.num = is.number

is.o = is.obj   = is.object
is.a = is.arr   = is.array
is.f = is.fn    = is.fx = is.fun = is.func
is.p = is.pojo;
is.i = is.int   = is.integer

is.N = is.numeric
is.U = is.uint  = is.unsignedInteger
is.F = is.float

is.prim  = is.primitive
is.numstr = is.numericString
is.intIndex = is.integerIndex
is.arrayIndex
```



## SYNOPSIS

*SYNOPSIS*    
    `is.METHOD(val)`

*PARAMETERS*    
    `val` is a value to identify.

*RETURN VALUE*    
    Boolean: true or false.




## INSTALL

[npm](https://www.npmjs.com/)

```shell
$ npm install @jsbx/is
```


## USAGE

```js
var is = require('@jsbx/is');

is.array([]); //=> true
is.pojo({}); //=> true
is.emptyPojo({}); //=> true
```


