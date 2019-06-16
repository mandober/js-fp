/*
const types3 = [
    "bln",
    "str",
    "num",
    "sym",
    "nul",
    "und",
]

const typesObj = {
    0: "null",
    1: "undefined",
    2: "bln",
    3: "str",
    4: "num",
    5: "sym",
    6: "nul",
    7: "und",
}

const getType = function(x) {
    let types = [];
    if (Array.isArray(x)) types.push("arr");
};
*/

/*
 * to return types of args, their number and order
 * for example: 0: boln 1: num
 *
*/
let anargs = function (...args) {
    let allowedArgs = ["num", "arr"]; // if order is not important
    let allowedArgs2 = { 0: "arr", 1: "arr", 2: "bln" }; // with strict order


    console.log(args);
    args.arg0 = "num";
    args.arg1 = "arr";
    Reflect.ownKeys(args); /*?*/

    let nargs = {};

    nargs[0] = {};
    nargs[0].v = args[0];
    nargs[0].t = "num"

    nargs[1] = {};
    nargs[1].v = args[1];
    nargs[1].t = "arr"


    console.log(nargs);
};

anargs(4, [5,8,3]);

/*
var args = {
    argn: 4,
    arg1: {
        type: "boolean",
        t: "bln",
        value: false
    },
    arg2: {
        type: "array",
        t: "arr",
        value: [1,2,3]
    }
}
*/



const anargs = function (...args) {
    let arg = {};
    arg.length = args.length;
    // type
    let p0 = typer(args[0]);
    console.log(p0);


    arg[0] = args[0];

    arg[1] = args[1];


    console.log(JSON.stringify(arg));
    return arg;
};


anargs(8, [1, 2, 3]); /*?*/





const argReq = function () {
    let req = {
        length: 2,
        order: "strict",
        curry: "allowed",
        arg1: {
            type: "number",
            min: 0,
            digits: 3.2,
        },
        arg2: {
            type: "array",
            flat: true,
            sparse: false,
            elements: "numbers", // num, str, bool, union{str|num}, mixed{*}
            minElements: 3,
        },
        arg3: {
            type: "string",
            minLength: 4,
            maxLength: 14,
            pattern: /a-zA-Z_-/,
        }
    }

};


arg = {
    length: 2,

    0: {
        type: "primitive",
        subtype: "number",
        value: 8,
    },

    1: {
        type: "native",
        subtype: "array",
        value: [1, 2, 3],
    }

};
