'use strict';

var get = {
    version: "0.0.1.170603",

    name(x) {
        const gon = require('./get-object-name');
        return gon(x);
    },

};


if (typeof module !== undefined) module.exports = get;



function fn(x) { return x };
console.log('Reflect.ownKeys(object): ', Reflect.ownKeys({})); // []
console.log('Reflect.ownKeys(array): ', Reflect.ownKeys([])); // ['length']
console.log('Reflect.ownKeys(regexp): ', Reflect.ownKeys(/:?/)); // [ 'lastIndex' ]
console.log('Reflect.ownKeys(function): ', Reflect.ownKeys(fn)); // [ 'length', 'name', 'prototype' ]
console.log('Reflect.ownKeys(Promise): ', Reflect.ownKeys(Promise)); // [ 'length','name','arguments','caller','prototype','resolve','reject','all','race',Symbol(Symbol.species) ]

