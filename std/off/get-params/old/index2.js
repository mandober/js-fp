function parseParams(fn) {

    // line containg keyword `function` followed by anything, followed by
    // open parenthesis, **, close parens - capture content between parens (**)
    // function .* ( .*? )
    const STR = "^(?:";
    const CFN = "(?:function.*\(([^]*?)\))";
    const CAR = "(?:([^\(\)]+?)\s*=>)";
    const CAW = "(?:\(([^]*?)\)\s*=>)";
    const END = ")[^]+$";
    var XREG = new RegExp(STR + CFN + CAR + CAW + END, "mg");
    XREG; //?

    // matches content in-between parenthesis, for normal and arrow fn
    const PARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/mg;

    // matches spread operator: ...
    const SPREAD = /\.{3}/;

    // matches default param (as an element, in an array of params): [a:x = 5 + 3] ---> [a:x]
    const PARAM_DEFAULT = /[=\s].*$/;

    // matches aliased param: [a:x] ---> [a]
    const PARAM_ALIAS = /^.*[:\s]/;

    // matches default param
    const DEFAULT_PARAMS = /=[^,]+/mg;

    const ARROW = /=>/mg;

    // matches destructuring patterns
    // matches: [...] = [] e.g: [ a = 5 + 6, b ] = []
    // matches: {...} = {} e.g: {x:a=5, y:b=6, z:c} = { }
    const DESTR = /\s*(:?[\[\{])\s*([^]*?)(:?[\]\}]) = \1\s*\3/m;


    //* 4) determine complexity
    DESTR.test(parens); //?
    if (DESTR.test(parens)) {
        //! TODO
        //* 4.1)capture the meaty part
        [, , p] = DESTR.exec(parens); //?
        console.log(p);

    }

    //* 5) make array of individual params: split above on comma (?)
    let parr = p.split(/\s*,\s*/); //?

    //* 6) clean-up array elements: remove whitespace
    parr = parr.map(v => v.replace(/[\n\v\r\t]/, "").trim()); //?

    //* 7) clean-up array elements: remove spread operator
    parr = parr.map(v => v.replace(SPREAD, "").trim()); //?

    //* 8) replace aliases
    // z:a ---> a
    parr = parr.map(v => v.replace(/^[:\s].*$/, "").trim()); //?

    //* 9) replace def values
    // x = 3 >>> x
    parr = parr.map(v => v.replace(/[=\s].*$/, "")); //?

    //* 10) return result
    return parr; //?


    // clean some artefacts
    // .map(v => v.replace(/[\{\}\[\]]/, ""))


};


// EXPORT
if (typeof module !== undefined) module.exports = parseParams;



// VERIFY

// var g3 = (a=5, ...b) => { };
// parseParams(g3); //?

// let gg1 = ([a = 5 + 6, /* first*/ b /* second*/] = []) => {};
// parseParams(gg1); //?

let gg2 = ({ /* first*/ x: a = 5, /* second*/ y:b = 6, z:c } = {}) => [a,b,c];
parseParams(gg2); //?
// gg2({x:1, y:2, z:[3, 4, 5]}); //?


/*
const fn10 = ([a, [b, c]] = [2, [3, 4]]) => { };
parseParams(fn10);//?

const f15 = ([a, [b, [c]]] = [2, [4, [6]]]) => { };
parseParams(f15); //?


const f14 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
parseParams(f14);//?

const f16 = ({ x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }) => { };
parseParams(f16); //?

const f17 = ({ x: a, y: b, z: c } = {}) => { };
parseParams(f17); //?

const f18 = ({ x: a = 1, y: b = 2, z: c = 3 } = { x: 22, y: 33, z: 44 }) => { };
parseParams(f18); //?
*/







function get(fn) {
    var s = fn.toString();

    const STR = "^(?:";
    const CFN = "(?:function.*\(([^]*?)\))";
    const CAR = "(?:([^\(\)]+?)\s*=>)";
    const CAW = "(?:\(([^]*?)\)\s*=>)";
    const END = ")[^]+$";
    var XRE = new RegExp(STR + CFN + CAR + CAW + END, "mg");

    const PARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/mg;

    var RR = XRegExp(/PARENS/);

    RR.test(s); //?

    s = s.replace(RR, "$1$2$3");

    //s = s.replace(/^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3");

    s = s.split(/\s*,\s*/);

    s = s.map(v => v.replace(/[=\s].*$/, ""));

    return s = s;

}

function g(a, b) { /*...*/ };
get(g); //?



// EXAMPLE 1:
// Using named capture and flag x (free-spacing and line comments)

// Using named backreferences...
// XRegExp.exec('2016-02-23', date).year; //?
//=> '2016'

// XRegExp.replace('2016-02-23', date, '${month}/${day}/${year}'); //?
//=> '02/23/2016'

// const STR = "^(?:";
// const CFN = "(?:function.*\(([^]*?)\))";
// const CAR = "(?:([^\(\)]+?)\s*=>)";
// const CAW = "(?:\(([^]*?)\)\s*=>)";
// const END = ")[^]+$";
// var XREG = new RegExp(STR + CFN + CAR + CAW + END, "mg");
// XREG; //?
// matches content in-between parenthesis, for normal and arrow fn
// const PARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/mg;
