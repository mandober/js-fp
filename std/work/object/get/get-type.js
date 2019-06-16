/**
 * Get type of parameter:
 * - boolean: primitive|object
 * - string: primitive | object, truthy|falsy
 * - symbol: primitive | object
 * - undefined
 * - null
 * - number
 *   - primitive | object
 *   - int | float
 *   - truthy|falsy
 *   - finite | NaN, Infinity
 *  native:
 * 
 * 
 * @param {any} x
 * @returns
 * 
 */
function getType(x) {
    'use strict';
    var out = {};
    // typeof : boolean|string|number|symbol|undefined|object|function

    // shorthands
    var t = typeof x,
        tt = Object.prototype.toString.call(x).slice(8, -1),
        ttt = tt.toLowerCase();

    // boolean
    if (t === "boolean") {
        out.type = "primitive";
        out.subtype = "boolean";
        out.primitive = true;
        out.compound = false;
        return out;
    }

    // Boolean
    if (tt === "Boolean") {
        out.type = "compound";
        out.subtype = "Boolean";
        out.primitive = false;
        out.compound = true;
        return out;
    }

    // string
    if (t === "string") {
        out.type = "primitive";
        out.primitive = true;
        out.compound = false;
        out.subtype = "string";
        return out;
    }


    // primitives: boolean|string|symbol|undefined|null
    if (t === "string"    || tt === "String") return "string";
    if (t === "symbol"    || tt === "symbol") return "symbol";
    if (t === undefined || tt === "Undefined") return undefined;
    if (t === "object"    && tt === "Null") return undefined;

    // numbers: int|unsafe|float|NaN|Infinity|-Infinity
    if (t === "number") {
        if (Number.isInteger(x)) {
            if (Number.isSafeInteger(x)) return "int";
            return "unsafe";
        }
        if (Number.isFinite(x)) return "float";
        if (Number.isNaN(x)) return "NaN";
        return "number";
    } 

    // functions
    if (t === "function") {
        if (x.toSource().search("function") >= 0) return "function";
        return "arrow function";
    }

    // null, objects
    if (t === "object") {
        if (tt === "[object Null]") return "null";
        if (tt === "[object Undefined]") return undefined;
        
        // builtins
        return Object.prototype.toString.call(x).slice(8, -1);
    }
};

if (typeof module !== undefined) module.exports = getType;



/*
module.exports = function typo(val) {
  // PRIMITIVIES
  if (typeof val === 'undefined') return 'undefined';
  if (val === null) return 'null';
  if (val === true || val === false || val instanceof Boolean) return 'boolean';
  if (typeof val === 'string' || val instanceof String) return 'string';
  if (typeof val === 'number' || val instanceof Number) return 'number';

  // NATIVES
  if (typeof val === 'function' || val instanceof Function) return 'function';
  if (Array.isArray(val))       return 'array';
  if (val instanceof RegExp)    return 'regexp';
  if (val instanceof Date)      return 'date';

  // OTHER
  var type = Object.prototype.toString.call(val);
  if (type === '[object RegExp]')       return 'regexp';
  if (type === '[object Date]')         return 'date';
  if (type === '[object Arguments]')    return 'arguments';
  if (type === '[object Error]')        return 'error';
  if (type === '[object Set]')          return 'set';
  if (type === '[object WeakSet]')      return 'weakset';
  if (type === '[object Map]')          return 'map';
  if (type === '[object WeakMap]')      return 'weakmap';
  if (type === '[object Symbol]')       return 'symbol';

  // TYPED ARRAYS
  if (type === '[object Int8Array]')            return 'int8array';
  if (type === '[object Uint8Array]')           return 'uint8array';
  if (type === '[object Uint8ClampedArray]')    return 'uint8clampedarray';
  if (type === '[object Int16Array]')           return 'int16array';
  if (type === '[object Uint16Array]')          return 'uint16array';
  if (type === '[object Int32Array]')           return 'int32array';
  if (type === '[object Uint32Array]')          return 'uint32array';
  if (type === '[object Float32Array]')         return 'float32array';
  if (type === '[object Float64Array]')         return 'float64array';

  // NODE
  var isBuffer = require('is-buffer');
  if (typeof Buffer !== 'undefined' && isBuffer(val)) return 'buffer';

  // otherwise
  return 'object';
};
*/