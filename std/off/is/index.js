'use strict';

let groups = {},
    typ = typeof(x),
    tos = (x) => Object.prototype.toString.call(x).slice(8, -1).toLowerCase();

//* group: nothings
groups.nothings = [undefined, null];

//* group: primitives
groups.primitives = [undefined, null, "boolean", "string", "symbol", "number"];



const is = {
    //* ================================= VOIDS =================================
    undef: (x) => typeof(x) === "undefined",
    nil  : (x) => tos(x) === "null",
    // nothings: (x) => (tos(x) === "null" || typeof (x) === "undefined",
    nothing: (x) => groups.nothings.includes(x),


    // undefined, null, "", new String("")
    nothing: (x) => nothings.includes(tos(x)) || (tos(x) === "string" && x.length === 0),

    boolean  : (x) => typeof(x) === "boolean",
    symbol   : (x) => typeof(x) === "symbol",
    string   : (x) => typeof(x) === "string",
    number   : (x) => typeof(x) === "number",

    primitive: (x) => primitives.includes(tos(x)),
    object   : (x) => !primitives.includes(tos(x)),

  //* ============================== STRINGS ====================================
    emptyString: (x) => tos(x) === "string" && x.length === 0,
    alpha      : (x) => /\w+/.test(x),

  //* ============================== NUMBERS ====================================
    float          : (x) => Number.isFinite(x) && Math.abs(x % 1) !== 0,
    integer        : (x) => Number.isInteger(x),
    safeInt        : (x) => Number.isSafeInteger(Number(x)),
    unsignedInteger: (x) => Number.isInteger(x) && x > -1,
    // number type + numeric string
    numeric: (x) => typeof x === 'number' || (typeof x === "string" && Number.isFinite(Number(x))),

  //* =============================== OBJECTS ===================================
    //object: (x) => (typeof x === "object" || typeof x === "function"),
    map:    (x) => tos(x) === "map",
    set:    (x) => tos(x) === "set",
    func:   (x) => typeof x === "function",

  //* =============================== ARRAYS ====================================
    array:       (x) => Array.isArray(x),
    arrayLike:   (x) => typeof x === "object" && "length" in Reflect.ownKeys(x),
    arrayOrLike: (x) => Array.isArray(x) || (typeof x === "object" && "length" in Reflect.ownKeys(x)),
    arrayIndex:  (x) => /^0$|^[1-9]\d*$/.test(x) && x <= 4294967294, // 2^32-2
    nestedArray: (x) => x.some(el => Array.isArray(el)),

  //* =============================== POJO ======================================
    pojo(x) {
        if (typeof x !== "object") return false;
        if (tos(x) !== "object") return false;
        if (Reflect.ownKeys(x).includes("length")) return false;
        if (Reflect.ownKeys(x).includes("size")) return false;
        return true;
    },

  //* ============================= EMPTY =======================================
    emptyPojo:  (x) => (this.pojo(x) && Reflect.ownKeys(x).length === 0),
    emptyArray: (x) => (this.array(x) && x.length === 0),
    emptyMap:   (x) => (this.map(x) && this.size === 0),
    emptySet:   (x) => (this.set(x) && this.size === 0),

    /*
     * Empty values:
     *  1) undefined
     *  2) null
     *  3) string:      ""
     *  4) number:      NaN, Infinity
     *  5) array:       []
     *  6) pojo:        {}
     *  7) map
     *  8) set
     *  *) function:    (() => void 0)   or   function(){}
     */
    empty(x) {
        // 1) undefined
        if (this.undef(x)) return true;
        // 2) null
        if (this.nil(x)) return true;
        // 3) "" (string)
        if (this.string(x) && x.length === 0) return true;
        // 4) NaN, Infinity (number)
        if (!this.numeric(x)) return true;
        // 5) [] (array)
        if (this.array(x)) return this.emptyArray(x);
        // 6) {} (pojo)
        if (this.pojo(x)) return this.emptyPojo(x);
        // 7) map
        if (this.map(x)) return this.emptyMap(x);
        // 8) set
        if (this.set(x)) return this.emptySet(x);

        // otherwise
        return false;
    },

  //* ============================= MISC ========================================
    nothing (x) {
        if ([null, undefined, "", NaN].includes(x)) return true;
        return false;
    },


}; // end is



//* ================ ALIASES ================
is.z = is.nill = is.nil;
is.u = is.void = is.undef;
is.b = is.bool = is.boolean;
is.s = is.str  = is.string;
is.y = is.sym  = is.symb = is.symbol;

is.prim = is.primitive;



is.o = is.obj = is.object;
is.a = is.arr = is.array;

is.intIndex = is.integerIndex = is.arrayIndex;
is.f = is.fn  = is.fx = is.fun = is.func;
is.p = is.pojo;

is.n = is.num  = is.number;

is.numeric
is.numstr = is.numericString

is.i = is.int   = is.integer;
is.U = is.uint  = is.unsignedInteger;
is.F = is.float;


//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = is;



//* ================ TRYOUT =================
is.nothing(null); //?
is.nothing(void 0); //?
is.nothing(undefined); //?
is.nothing(new Boolean()); //?



is.alpha("red"); //?
is.alpha("red dead6"); //?

var a = "65.9";
/^\d+$/.test(a); //?

var alpha = `5-0 police's, åloΣúgo "and" x_fire `;
/^[\d\w ,"'-]+$/m.test(alpha); //?