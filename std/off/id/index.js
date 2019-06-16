/**
 * Identify the type of value.
 * @param   {*}  x    Any value.
 * @returns {string}  Type of value.
 */
const t = function (x) {
    'use strict';
    let typ = typeof (x);
    let tos = Object.prototype.toString.call(x).slice(8, -1);

    //* ====================== EMPTIES =====================

    //? undefined
    if (typ === "undefined") return "undefined";

    //? null
    if (tos === "Null") return "null";

    //* ============== PRIMITIVES AND BOXES =================

    //? boolean
    if (typ === "boolean") return "boolean";
    if (tos === "Boolean") return "Boolean";

    //? string
    if (typ === "string") return "string";
    if (tos === "String") return "String";

    //? symbol
    if (typ === "symbol") return "symbol";
    if (tos === "Symbol") return "Symbol";


    //* ====================== NUMBERS ======================

    if (tos === "Number") {
         //* NaN
        if (Number.isNaN(x)) return "NaN";
        // integer: int, uint, unsafe
        if (Number.isFinite(x)) {
            //* int
            if (Number.isInteger(x)) return "int";
            //* float
            if (Number.isFinite(x) && (Math.abs(x % 1) !== 0)) return "float";
        }
        return tos;
    }

    //* function
    if (tos === "function") return "function";

    //* array
    if (tos === "array") return "array";

    //* pojo
    if (tos === "object") return "pojo";

    //! else:
    return tos;

};



//* ===================== EXPORT ====================
if (typeof module !== "undefined") module.exports = t;


//* ===================== TRYOUT ====================
t("x"); //?
t(new String("x")); //?

t(new Boolean()); //?
t(true); //?

//! false Boolean objects:
// new Boolean()
// new Boolean(undefined)
// new Boolean(null)
// new Boolean(false)
// new Boolean(NaN)
// new Boolean(0)
// new Boolean(-0)
// new Boolean(0.0)
// new Boolean(0.000)
// new Boolean(1e-324) // 0
// new Boolean(1e-325) // 0

//! true Boolean objects:
// new Boolean(true)
// new Boolean(1)
// new Boolean(Infinity)
// new Boolean(-Infinity)
// new Boolean(1e-323) // 1e-323: 10**-323
// new Boolean(1e-322) // 1e-322: 10**-322



null == undefined; //?
undefined == null; //?
false == undefined; //?
"" == false; //?
0 == false; //?
0 == ""; //?


//! 1e-323 minimum numbe that coerces to 'true'
let z322 = 1e-323;
if (z322) console.log(true);
1e-323 === z322; //?


// all smaller than 1e-324 is equivavelnt to zero
let z323 = 1e-324;
if (z323) console.log(true);
else console.log(false); //?

1e-323 === 0; //?
1e-324 === 0; //?
1e-325 === 0; //?
1e-326 === 0; //?
1e-323 - 1e-325; //?









var rr = new Boolean();


var y = new Boolean(null); //?
t(y); //?
y.valueOf(); //?


t(rr); //?
rr; //?
rr.valueOf(); //?
rr.toString(); //?
var ee = new Boolean(false);
ee.valueOf(); //?
ee.toString(); //?