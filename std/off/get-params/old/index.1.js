/**
 * Get function's declared parameter names.
 * Extracts parameters names from varios shapes of functions.
 *
 * @param  {function}  fn     A function.
 * @returns {array<strings>}  An array of function's parameter names.
 */
const getParams = function getParams(fn) {
    'use strict';

  //* =============================== PART 1 ==================================

    //! 1) get fn source with toString (toSource doesnt work in Node)
    let src = fn.toString().trim();
    console.log('\n1) SRC:\n', src);

    //! 2) remove comments
    const COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    src = src.replace(COMMENTS, '').trim();
    console.log('\n2) UNCOMMENTED:\n', src);

    //! 3) extract content between parenthesis
    const EXTRACTPARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/gm;
    src = src.replace(EXTRACTPARENS, "$1$2$3");
    console.log('\n3) EXTRACTED:\n', src);

    //! 4) remove whitespace
    const NL = /[\s]/mg;
    src = src.replace(NL, "").trim();
    console.log('\n4) REMOVE WS:\n', src);


  //* =============================== PART 2 ==================================

    //! DESTRUCTURING: object destructuring
    // { x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }

    const DESTR = /\s*(:?[\[\{])\s*([^]*?)(:?[\]\}])\s*=\s*\1\s*\3/gm;
    // { x: a, y: b, z: c } = { }
    // [a, b, c] = []
    if (DESTR.test(src)) {
        console.log('\nDESTR:', DESTR.test(src)); //?
        [, , src] = DESTR.exec(src); //?
        console.log('\nUNDESTR:', src);
    }

    //! DESTRUCTURING: array destructuring
    // [a,[b,c]]=[2,[3,4]]




  //* =============================== PART 3 ==================================

    //! 5) SPLIT STRING INTO ARRAY
    const DELSPLIT = /\s*,\s*/;
    src = src.split(DELSPLIT);
    console.log('\nSPLIT:\n', src);

    //! CLEAN ARRAY ELEMENTS: a) remove SPREAD operator
    const DELSP = /\.{3}/;
    src = src.map(el => el.replace(DELSP, "").trim());
    console.log('\nREMOVE SPREAD:\n', src);

    //! CLEAN ARRAY ELEMENTS: b) remove DEFAULT values
    const DELDEF = /[=\s].*$/g;
    src = src.map(el => el.replace(DELDEF, "").trim());
    console.log('\nREMOVE DEFAULTS:\n', src);

    //! CLEAN ARRAY ELEMENTS: c) remove ALIASED param
    const DELALIAS = /^.*[:\s]/g;
    src = src.map((v) => v.replace(DELALIAS, "").trim());
    console.log('\nREMOVE ALIASED:\n', src);

  //* ============================== THE END ==================================

    //! return
    return src;
}


//* ================ EXPORT ================
if (typeof module !== "undefined") module.exports = getParams;


//* ================= TEST =================

let g1 = function( {x: a, y: b, z: c} = { } ) {};
getParams(g1); //?

let g2 = function ({ x: a, y: b, z: c } = { x:1, y:2, z:3}) {};
getParams(g2); //?

let g3 = function ({ x:a, y:b=6, c } = { x: 1, y: 2, c: 3 }) { };
getParams(g3); //?


let g8 = function ( [a, b, c] = [2,3,4] ) {}
getParams(g8); //?
