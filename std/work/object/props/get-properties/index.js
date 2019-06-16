'use strict';
/**
 * Get all available properties
 *
 * @param {object}  obj       Object with which to start.
 *  @param {boolean} distinct  Distinct(1) vs. every(0) property.
 *  @param {boolean} enu       Only enumerable(1) vs. all(0) properties.
 * @return {array<string>}    Array of propery names.
 */
function gp(obj,
    {
        ownership = 0,
        identifers = 0,
        distinct = 0,
        methods = 0,
        read = 0,
        write = 0,
        conf = 0
    } = {}) {
    var result = [];

    // while obj is not the end of prototype chain i.e. null
    while (obj) {
        // add own property names of each object
        result.push(Reflect.ownKeys(obj));
        // set next object to current object's prototype
        obj = Object.getPrototypeOf(obj);
    }

    // distinct
    if (distinct) return [...(new Set(result))];
    return result;
}

if (typeof module !== undefined) module.exports = gp;


// options
var options = {

    ownership: 0,
    // 0 = all (get all properties)
    // 1 = own (get object's own properties only)
    // 2 = delegated (get only object's delegated properties)

    identifers: 0,
    // 0 = all
    // 1 = names
    // 2 = symbols

    distinct: 0,
    // 0 = report all property names, even if duplicated (same property name on more objects)
    // 1 = report only distinct properties

    methods: 0,
    // 0 = all
    // 1 = methods only
    // 2 = non-methods only


    read: 0,
    // 0 = all
    // 1 = enumerable
    // 2 = non-enumerable

    write: 0,
    // 0 = all
    // 1 = writable
    // 2 = non-writable

    conf: 0,
    // 0 = all
    // 1 = configurable
    // 2 = non-configurable
}
