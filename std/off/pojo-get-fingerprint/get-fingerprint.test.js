const finger = require('./');

// usage
const sym = Symbol('sym symbol');
const met = Symbol('met symbol');
const inn = Symbol('inn symbol');

let obj = {
    a: "abc",
    0: 1,
    2: Symbol('two'),
    [sym]: 33,
    [inn]: 666,
    [met]() {
        return Object.keys(this).filter(key => typeof (obj[key]) == 'function');
    },
    [Symbol.iterator]() {
        let k = Object.keys(this),
            i = 0;
        return {
            next: function () {
                return {
                    value: k[i],
                    done: i++ <= k.length
                };
            }
        }
    }
}

Object.defineProperty(obj, "innum", {enumerable: false});
Object.defineProperty(obj, inn, {
    value: 36666,
    enumerable: true
});


var f = finger(obj);
console.log('f: ', f);

console.log('obj[inn]', obj.inn);
