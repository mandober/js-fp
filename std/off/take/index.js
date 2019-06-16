/**
 * Return the first n, non-empty, elements of an array.
 *
 * @param {Array}  arr  An array.
 * @returns  {Array}  Returned elements array.
 */
//const take = (n) => (arr) => arr.slice(0, n);
const take = function(...args) {
    switch (args.length) {
        case 0:
            return new TypeError('No arguments provided');

        case 1:
            if (Number.isInteger(args[0])) {
                return (arr) => arr.slice(0, args[0]);
            } else if (Array.isArray(args[0])) {
                return (n) => args[0].slice(0, n);
            } else {
                return new TypeError('Bad arguments provided');
            }

        case 2:
            if (Number.isInteger(args[0]) && Array.isArray(args[1])) {
                return args[1].slice(0, args[0]);
            } else if (Number.isInteger(args[1]) && Array.isArray(args[0])) {
                return args[0].slice(0, args[1]);
            } else {
                return new TypeError('Bad arguments provided');
            }

        default:
            return new TypeError('Bad arguments provided');

    } // end swith
};


/**
 * Return the last n elements from the end of an array.
 *
 * @param {Array}  arr  An array.
 * @returns  {Array}  Returned elements array.
 */
const takeRight = (n) => (arr) => arr.slice(-n);


/**
 * Return partially applyied function.
 *
 * @param {Array}  arr  An array.
 * @returns  {λ}  Return partially applyied function..
 */
const taken = (n) => (arr) => arr.slice(n);




if (typeof module !== undefined) module.exports = {
    take,
    takeRight
};

