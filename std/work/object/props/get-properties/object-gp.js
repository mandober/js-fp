'use strict';


    // getEnumerableProperties
    /**
     * Get all enumerable properties of an object.
     *
     * @param {Object}  obj  Object to query for own property names.
     * @return {array} All enumerable properties of an object.
     *
     */
    let getEnumerableProperties = function (obj) {
        let result = [];
        for (let p in obj) {
            result.push(p);
        }
        return result;
    };


    // getDelegatedProperties
    /**
      * Get delegated properties of an object.
      *
      * @param {Object} obj Object to query for own property names.
      *
      */
    let getDelegatedProperties = function (obj) {
        let all = getAllProperties(obj, 0);
        let own = getOwnProperties(obj);
        let result = _.xor(all, own);
        return result;
    };


    // getMutualProperties
    /**
      * Get mutual properties of an object.
      *
      * @param {Object} obj Object to query for own property names.
      *
      */
    let getMutualProperties = function (obj) {
        let all = getAllProperties(obj, 0);
        let own = getOwnProperties(obj);
        let result = _.intersection(own, all);
        return result;
    };


    // getPropDescriptor
    /**
      * Get descriptor for own property of an object.
      *
      * @param {Object}   obj   Object to query.
      * @param {*}  prop  prop  Property to query.
      * @return {object}  Property descriptor object.
      */
    let getPropDescriptor = function (obj, prop) {
        return Object.getOwnPropertyDescriptor(obj, prop);
    }


    // getDefiningObject
    /**
      * Get object that defines a property, that passed
      * object also has access to through delegation.
      *
      * @param {Object}   obj   Object to query.
      * @param {*}  prop  prop  Property to query.
      * @return {object}  Object that owns queried property.
      */
    let getDefiningObject = function (obj, prop) {
        while (obj && !{}.hasOwnProperty.call(obj, prop)) {
            obj = Object.getPrototypeOf(obj);
        }
        return obj;
    }


    // getProp
    /**
      * Get properties.
      *
      * @param {object}  obj       Object with which to start.
      * @param {boolean} own       Own(1) vs. delegeted(2) vs. all(3) properties.
      * @param {boolean} distinct  Distinct(1) vs. every(0) property.
      * @param {boolean} enumer    Only enumerable(1) vs. all(0) properties.
      * @param {boolean} user      Only user(1) vs. builtin(0) properties.
      * @param {string|array} prop Property or properties.
      *
      * @return {array} Propery names.
      */
    let getProp = function (obj, own = 1, distinct = 1, enumer = 1, user = 1) {
        if (typeof obj !== "object") throw new TypeError('[getProp] - 1.parameter must be an object.');
        let result = [];

        // while obj is not the end of prototype chain i.e. null
        while (obj) {
            // add own property names of each object
            result = result.concat(Object.getOwnPropertyNames(obj));
            // set next object to current object's prototype
            obj = Object.getPrototypeOf(obj);
        }
        // keep only distinct properties
        return [...(new Set(result))];
    }


    // API
    /*
    return {
        id: identifyValue,
        gpc: getPrototypeChain,

        gap: getAllProperties,
        gop: getOwnProperties,
        goep: getOwnEnumerableProperties,
        gep: getEnumerableProperties,
        gdp: getDelegatedProperties,
        gmp: getMutualProperties,

        gp: getProp,
        gpd: getPropDescriptor,
        gdo: getDefiningObject,
        wec:wec,
    };
    */
    return mm;

}(mandober || {}, typeof window !== 'undefined' ? window : global);














/*
properties:
 * all | own | delegeted
 * all | enumerable | non-enumerable
 *
 * all | configurable | non-configurable
 * all | writable | non-writable
 * all | builtin | user
 * all | distinct

* is a property `prop` own property of object `obj`?    getOwnPropertyDescriptor(obj, prop)

* rwx 4 2 1 ewc
* r 4 e 4
* w 2 w 2
* x 1 c 1
*/


// make some objects
let grandpa = {
    name: "grandpa",
    color: "gray",
    age: 71,
};

let papa = {
    name: 'papa',
    job: 'plumber',
};
Object.setPrototypeOf(papa, grandpa);


let sonny = {
    name: 'sonny',
    school: 'elementary',
};
Object.setPrototypeOf(sonny, papa);

Object.defineProperty(sonny, "nonEnum", {
    value: "nonEnum",
    enumerable: false,
    writable: true,
    configurable: true,
});

Object.defineProperties(sonny, {
    "Enum-RO": {
        value: 'Enum-ReadOnly',
        enumerable: true,
        writable: false,
        configurable: true,

    },
    "Enum-nonConfig": {
        value: 'Enum-nonConfigurable',
        enumerable: true,
        writable: true,
        configurable: false,
    }
});

// let gdo = ject.gdo(papa, 'foo');