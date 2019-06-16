'use strict';

const gp = require('./index');

var o = {
    _name: "o",
    propStr: "string",
    propNum: 123,
    propBool: true,
    get name() {
        return this._name;
    },
    get lazy() {
        delete this.lazy;
        return this.lazy = "lazy getter";
    },
}

console.log('add:', o.add)
console.log('o.lazy:', o.lazy);
console.log('gp(o):', gp(o));
// console.log('distinct gp(o):', gp(o, {distinct:1}));

// var o = require('../../samples');
// console.log('gp(o.obj):', gp(o.obj));
