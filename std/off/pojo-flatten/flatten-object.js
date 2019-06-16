const flatten = (x) =>
    (Array.isArray(x))
        ? x.reduce((acc, el) => acc.concat(flatten(el)), [])
        : x;


const keyz = (obj) => {
    var keyes = Object.keys(obj);

    return (typeof (x) === 'object')
        ? keyes
        //? obj.reduce((acc, el) => acc.concat(flatten(el)), [])
        : keyes;
};



const oflat = (x) => {
    let keys = Object.keys(x),
    return (typeof(x) === 'object')
        ? x.reduce((acc, el) => acc.concat(oflat(el)), [])
        : x;
};



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


