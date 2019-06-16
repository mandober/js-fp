

var a = [0, 1, 2, 3, 4, 5]; // delete a[0]; delete a[5];
var arr = ["primo", 2, undefined, , 6, , "ultimo"];
var arr2 = [, null, 3, undefined, , "55", ,];
var arr3 = new Array(6);


get.first(a); //?
get.first(arr); //?
get.first(arr2); //?
get.first(arr3); //?

get.tail(a); //?
get.tail(arr); //?
get.tail(arr2); //?
get.tail(arr3); //?

get.last(a); //?
get.last(arr); //?
get.last(arr2); //?
get.last(arr3); //?

get.head(a); //?
get.head(arr); //?
get.head(arr2); //?
get.head(arr3); //?




for (let el in arr2) {
    arr2[el]; //?
}

var a2 = arr.filter(el => el);
a2; //?


