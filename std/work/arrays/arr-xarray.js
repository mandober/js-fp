class List extends Array {
    constructor(...args) {
        super(...args);
    }
    static [Symbol.toStringTag]() {
        return "List";
    }
    static get [Symbol.species]() {
        return Array;
    }
}

var x = new List();
x[2] = "jones"
x[3] = "moore"
x[4] = "moore"
x[5] = "smith"
x[7] = "jagger"
delete x[4];
console.log('list x: ', x);

console.log('peak: ', x.peak());
console.log('new list x: ', x);

console.log('packed list: ', x.pack());




console.log(x instanceof List); // true
console.log(x instanceof Array); // true
