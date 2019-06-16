'use strict';
/*
class jsbx extends Object {
    static get [Symbol.species]() { return Object; }
}

class xarr extends Array {
    // Overwrite arr species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}
*/

function flatten(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce(function (acc, el) {
            return acc.concat(flatten(el));
        }, []);
    } else return arr;
}


function flatten2(input) {
    if (!Array.isArray(input)) throw new TypeError("[flatten] Parameter must be an array.");
    let output = []
    for (let i = 0, len = input.length; i < len; i++) {
        if (Array.isArray(input[i])) {
            // if element is inner array, recurse flatten
            output = output.concat(flatten2(input[i]));
        } else {
            // if element is not an array push it
            output.push(input[i]);
        }
    }
    return output;
}


function flattenObj(input) {
    let output = {},
        i = 0,
        keys = Object.keys(input),
        len = keys.length;

    for (; i < len; i++) {
        if (Array.isArray(input[i])) {
            // if element is inner array, recurse flatten
            output = output.concat(flattenObj(input[i]));
        } else {
            // if element is not an array push it
            output.push(input[i]);
        }
    }
    return output;
}
