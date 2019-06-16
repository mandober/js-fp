// FLATTENING AN ARRAY

// recursive reduce + concat
const flatten = arr => (Array.isArray(arr)) ? arr.reduce((acc, el) => acc.concat(flatten(el)), []) : arr;


// recursive loop
function flat(arr, res) {
    var len = arr.length;
    var i = -1;
    while (len--) {
        var cur = arr[++i];
        if (Array.isArray(cur)) {
            flat(cur, res);
        } else {
            res.push(cur);
        }
    }
    return res;
}

