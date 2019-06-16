'use strict';
const getType = require('./');
const assert = require('assert');

let values = {
    "undef": undefined,
    "nill": null,
    "NaN": NaN,
    "boolean (true)": true,
    "boolean (false)": false,
    "number (Infinity)": Infinity,
    "number (-Infinity)": -Infinity,
    "float": 2.11,
    "int (-0)": -0,
    "int (0)": 0,
    "int (2.0)": 2.0,
    "int (2**52)": 2 ** 52,
    "int (unsafe) (2**53)": 2 ** 53,
};

for (let p in values) {
    console.log('expected: ' + p + ', got:', getType(values[p]), ', value:', values[p]);
}
