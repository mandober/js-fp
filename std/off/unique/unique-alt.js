'use strict';

var arr = [22, 11, 9, 11, 22, 8];

// filter
var unique2 = (arr) =>
    arr.filter((el, i) =>
        arr.indexOf(el) === i);

unique2(arr); //?


// filter
var unique1 = (arr) => {
    var acc = [];
    return arr.filter(
        (el) => !acc.includes(el)
            ? acc.push(el)
            : false
    );
};

unique1(arr); //?



// reduce
var uniques = (arr) =>
    arr.reduce((acc, el) =>
        acc.includes(el) ? acc : (acc.push(el), acc)
        , []);

uniques(arr); //?


// reduce
var unique3 = (arr) =>
    arr.reduce((acc, el) => {
        if (!acc.includes(el)) acc.push(el);
        return acc;
    }, []);

unique3(arr); //?


// reduce
var unique33 = (arr) =>
    arr.reduce((acc, el) =>
        (acc.includes(el) ? acc : acc.push(el), acc),
    []);

unique33(arr); //?



// while
var unique4 = function unique(arr) {
    var len = arr.length,
        i = -1;
    while (i++ < len) {
        var j = i + 1;
        for (; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
                arr.splice(j--, 1);
            }
        }
    }
    return arr;
};

unique4([2, 1, 2, 1, 4]); //?



// uniqueImmutable - BROKEN
var unique5 = function unique(arr) {
    var len = arr.length,
        newArr = new Array(len);

    for (var i = 0; i < len; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
};

unique5([2, 1, 2, 1, 4]); //?
