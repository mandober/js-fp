function getParams(fn) {

    // matches inline comment: xyz /*...*/ abc /*...*/
    const COMMENT = /(\/\*.*?\*\/)/mg;

    // unchecked
    const COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;

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


    DESTR.test(parens); //?
    //? determine complexity
    if (DESTR.test(parens)) {
        //! TODO
        //* capture the meaty part
        [, , p] = DESTR.exec(parens); //?
        console.log(p);

    }

    //* make array of individual params: split above on comma (?)
    let parr = p.split(/\s*,\s*/); //?

    //* clean-up array elements: remove whitespace
    parr = parr.map(v => v.replace(/[\n\v\r\t]/, "").trim()); //?

    //* clean-up array elements: remove spread operator
    parr = parr.map(v => v.replace(SPREAD, "").trim()); //?



    //* replace aliases
    // z:a ---> a
    parr = parr.map(v => v.replace(/^[:\s].*$/, "").trim()); //?

    //* replace def values
    // x = 3 >>> x
    parr = parr.map(v => v.replace(/[=\s].*$/, "")); //?


    return parr; //?


    // .map(v => v.replace(/[\{\}\[\]]/, ""))


};


// export
if (typeof module !== undefined) module.exports = getParams;



// VERIFY

// let gg1 = ([a = 5 + 6, /* first*/ b /* second*/] = []) => {};
// getParams(gg1); //?

let gg2 = ({ /* first*/ x: a = 5, /* second*/ y:b = 6, z:c } = {}) => [a,b,c];
getParams(gg2); //?
// gg2({x:1, y:2, z:[3, 4, 5]}); //?


/*
const fn10 = ([a, [b, c]] = [2, [3, 4]]) => { };
getParams(fn10);//?

const f15 = ([a, [b, [c]]] = [2, [4, [6]]]) => { };
getParams(f15); //?


const f14 = (f, { x = 1, y = 2, z = x + 3 } = {}, ...r) => [f, x, y, z, r];
getParams(f14);//?

const f16 = ({ x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }) => { };
getParams(f16); //?

const f17 = ({ x: a, y: b, z: c } = {}) => { };
getParams(f17); //?

const f18 = ({ x: a = 1, y: b = 2, z: c = 3 } = { x: 22, y: 33, z: 44 }) => { };
getParams(f18); //?
*/
