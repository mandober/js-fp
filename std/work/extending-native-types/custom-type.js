/*
var size = Symbol('size');

class Collection {
    constructor() {
        this[size] = 0;
    }

    add(item) {
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance) {
        return instance[size];
    }

    [Symbol.toStringTag]() {
        return "Collection";
    }
}

var c = new Collection();
*/

// -------------


var src = {
    size: 0
};
Object.defineProperty(src, "data", {
    value: 0,
    enumerable: true,
    writable: true,
    configurable: false
})

let validator = {
    set: function (obj, prop, value) {
        if (prop === 'data') {
            if (!Number.isInteger(value)) return new TypeError('The data is not an integer');
            if (value > 2 || value < 0) return new RangeError('The data is out of range');
        }
        // The default behavior to store the value
        obj[prop] = value;
        return true;
    }
};
let shn = new Proxy(src, validator);
shn.data = 1;
console.log('src', src);
console.log(shn.data); // 100
shn.data = 'young'; // Throws an exception
shn.data = 3; // Throws an exception

shn.data = 2;
console.log('src', src);

/*
var handler = {
    get(target, property) {
        return property in target ? target[property] : "no such own prop";
    },

    set(target, property, value) {
        if (typeof property === "number") {
            target[property] = value;
            return target;
        }
        return false;
    },

};

var face = new Proxy(src, handler);

console.log('face.data:', face.data);
face.data = "rfr";
console.log('face.data:', face.data);
face.data = 1;
console.log('face.p: ', face.p);

console.log('face.data:', face.data);


console.log('face', face);
console.log('src', src);
console.log('handler', handler);
*/