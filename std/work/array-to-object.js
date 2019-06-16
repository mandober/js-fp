//! Object and Array relation

//! Object 2 Array
var obj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4,
    x: "abc"
};
var arr = Array.from(obj); //?
// [0,1,2,3]
arr[4] = 4;
arr.length; //?
// 5
arr['x']; //?


//! copy an array
var a = [0, 1, 2, 3];
var [...d] = a;
d;
d[4] = 4;
d;
a;

var [[...y], [...z]] = [[0, 1], [2, 3]];
y;
z;
