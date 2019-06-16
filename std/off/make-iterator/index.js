/**
 *
 *
 * @class MakeIterator
 */
class MakeIterator {
    constructor(array) {
        if (!Array.isArray(array)) return new TypeError(`[MakeIterator] Parameter must be an array.`);
        this.array = array;
        this.index = 0;
    }

    next() {
        return {
            value: this.array[this.index],
            done: this.index++ >= this.array.length
        };
    }
}

module.exports = MakeIterator;
