// FLATTENING AN ARRAY
'use strict';

// recursive reduce + concat
var flatten = arr => (Array.isArray(arr)) ? arr.reduce((acc, el) => acc.concat(flatten(el)), []) : arr;



// recursive reduce + concat + custom depth
var flattend = (arr, depth = Infinity) =>
    arr.reduce(
        (list, v) =>
            list.concat(
                depth > 0
                    ? (depth > 1 && Array.isArray(v)
                        ? flattend(v, depth - 1)
                        : v)
                    : [v]
            )
        , []);





// recursive reduce + concat
var flatten =
    arr =>
        arr.reduce(
            (list, v) =>
                list.concat(Array.isArray(v) ? flatten(v) : v)
            , []);


// recursive reduce + concat
var flatten = function flatten(arr) {
    if (Array.isArray(arr)) {
        return arr.reduce(function (acc, el) {
            return acc.concat(flatten(el));
        }, []);
    } else return arr;
}

// recursive + while loop
var flatten = function flatten(arr, res) {
    var len = arr.length;
    var i = -1;
    while (len--) {
        var cur = arr[++i];
        if (Array.isArray(cur)) {
            flatten(cur, res);
        } else {
            res.push(cur);
        }
    }
    return res;
}

// recursive + while loop
function flat(arr, acc = []) {
  var len = arr.length;
  var idx = -1;
  while (++idx < len) {
    var cur = arr[idx];
    if (Array.isArray(cur)) {
      flat(cur, acc);
    } else {
      acc.push(cur);
    }
  }
  return acc;
}



// recursive + for loop
var flatten = function flatten(input) {
    if (!Array.isArray(input)) throw new TypeError("[flatten] Parameter must be an array.");
    let output = []
    for (let i = 0, len = input.length; i < len; i++) {
        if (Array.isArray(input[i])) {
            // if element is inner array, recurse flatten
            output = output.concat(flatten(input[i]));
        } else {
            // if element is not an array push it
            output.push(input[i]);
        }
    }
    return output;
}
