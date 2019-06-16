
class SetArray extends Array {
    // Overwrite species to the parent Array constructor
    static get[Symbol.species]() {
        return Array;
    }

    static[Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }

    last() {
        return this[this.length - 1];
    }
}

var sub = new SetArray(1, 2, 3);
sub // [1, 2, 3]
sub instanceof SetArray; // true
sub instanceof Array; // true

var handler = {
    get(obj, prop) {
        return (obj.includes(prop)) ? false : obj[prop];
    },
    set(obj, prop, value) {
        return (obj.includes(prop)) ? false : obj.push(value);
    }
};

var sar = new Proxy(sub, handler);

sar[3] = 8; /*?*/
sar;
sar[3] = 5; /*?*/
sar;
sar[3]; /*?*/
sar[33]; /*?*/
sar[3] = 8; /*?*/
sar.push(8); /*?*/
sar.push(9); /*?*/
