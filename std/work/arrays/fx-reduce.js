
Array.prototype.reducer = function(fn, value) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this) value = value === void 0 ? this[i] : fn.call(null, value, this[i], i, this);
    }
    return value;
};

Array.prototype.reducerRight = function(fn, value) {
    var i = this.length;
    while (i--) {
        if (i in this) value = value === void 0 ? this[i] : fn.call(null, value, this[i], i, this);
    }
    return value;
};

// test

let a = [9, 2].reducer(el => el+2, 0); /*?*/

