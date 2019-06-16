/**
 * Get object's prototype chain.
 * 
 * @param {object}  obj  An object for which to retrive prototype chain.
 * @return {array<string>}  Array of strings containing names of objects 
 *                          in object's prototype chain (excluding object itself).
 */
function getPrototypeChain(obj) {
    'use strict';
    var pc = [];

    function getObjectName(obj) {
        // functions only
        if (obj.name) return obj.name;

        // builtin prototypes
        if (obj.constructor.name) return obj.constructor.name + '.prototype';

        // the rest? literal objects, arrays...

    }


    obj.name && pc.push(getObjectName(obj));

    while (obj.__proto__) {
        pc.push(getObjectName(obj.__proto__));
        obj = obj.__proto__;
    }
    pc.push('null');
    return pc;
}

if (typeof module !== undefined) module.exports = getPrototypeChain;