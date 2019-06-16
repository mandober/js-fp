/**
 * - maybe best to prove by eliminating all other options (objects)?
 * - stringifies its keys (watch for symbols as keys)
 * - biggest numeric index 2**52-1
 *
 * Unless overriden:
 * - JSON parsable/stringifyable
 * - [object Object] (but some env return the same for regexp and date instances)
 * - no length prop
 * - no size prop
 * - non-iterable
 * - no own non-enumerable props
 *
 */
const isPojo = function isPojo(x) {
    if (typeof x !== "object") return false;
    if (Object.prototype.toString.call(x) !== "[object Object]") return false;
    if (Object.getPrototypeOf(x) !== null && Object.getPrototypeOf(x) !== Object.prototype) return false;

    if (Reflect.ownKeys(x).includes("length")) return false;
    if (Reflect.ownKeys(x).includes("size")) return false;

    return true
}


//* === EXPORT ===
if (typeof module !== undefined) module.exports = isPojo;
