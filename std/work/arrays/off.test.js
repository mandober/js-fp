'use strict';
var $ = require('./off');

// SAMPLE ARRAY: sparse
// var arr = [,,"3","",,55,,]
// arr[2] = "jones"
// arr[3] = "moore"
// arr[4] = "moore"
// arr[5] = "smith"
// arr[6] = "jagger"
// delete arr[4];
// arr[8] = "gear"
// console.log('array:', arr)
// console.log('pack arr >> ', $.array.pack(arr));

console.log('$.array.methods(): ', $.array.methods());


var rot = [1, 2, 3, 4, 5];
console.log('rot: ', rot);
// rotate 1 time, to RIGHT: spin = -1. Default
// console.log('rot 1 to right: ', $.array.rotate(rot, -1));
// console.log('rot 2 to left: ', $.array.rotate(rot, 2));
var arr1 = $.array.rotate(rot, 2);
console.log('arr1: ', arr1);
// [5, 1, 2, 3, 4]
// rotate 2 time, to LEFT: spin = 2
// [3, 4, 5, 1, 2]

function cb(x) {
    return x*x;
}
$.array.mapWith(cb, rot); //=> [1,4,9,16,25]
// $.array.mapWith((x) => !!x, [null, true, 25, false, "foo"]) //=> [false,true,true,false,true]

console.log('$.array.methods(): ', $.array.methods());