﻿/**
 * Get function's declared parameter names.
 * Extracts parameters names from varios forms of functions.
 *
 * @param  {function}  fn     A function.
 * @returns {array<strings>}  An array of function's parameter names.
 */
const getParams = function getParams(fn) {
    'use strict';

    //! 1) get fn source
    let src = fn.toString().trim();
    //console.log('\n1) SRC:\n', src);

    //! 2) remove comments
    const RE_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    src = src.replace(RE_COMMENTS, '').trim();
    //console.log('\n2) UNCOMMENTED:\n', src);

    //! 3) extract content between parenthesis
    const RE_INPARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/gm;
    src = src.replace(RE_INPARENS, "$1$2$3");
    //console.log('\n3) EXTRACTED:\n', src);

    //! 4) remove whitespace
    const RE_NL = /[\s]/mg;
    src = src.replace(RE_NL, "").trim();
    // console.log('\n4) REMOVE WS:\n', src);



    //! DESTRUCTURING?
    //const RE_DESTR = /\s*(:?[\[\{])\s*([^]*?)(:?[\]\}])\s*=\s*\1\s*\3/gm;
    const RE_DESTR = /(:?[\[\{])([^]*?)(:?[\]\}])(=\1(.*?)?\3)?/gm;
    if (RE_DESTR.test(src)) {
        // console.log('\n === YES DESTRUCTURING ===');

        const RE_RHS = /(:?[\[\{])(.*?)(:?[\]\}])(=\1.*?\3)?/gm;
        src = RE_RHS.exec(src)[2]; //?
        // { x: a, y: b, z: c }
        // { x: a, y: b, z: c } = { }
        // { x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }
        // [a, b, c]
        // [a, b, c] = []
        // [a, b, c] = [1, 2, 3]
        // console.log('\nUNDESTR:', src);

        //? DESTRUCTURING: nested array destructuring
        // [a,[b,c]]=[2,[3,4]]


    }




    //! 5) SPLIT STRING INTO ARRAY
    const DELSPLIT = /\s*,\s*/;
    src = src.split(DELSPLIT);
    // console.log('\nSPLIT:\n', src);

    //! CLEAN ARRAY ELEMENTS: a) remove SPREAD operator
    const DELSP = /.{3}/;
    src = src.map(el => el.replace(DELSP, "").trim());
    //console.log('\nREMOVE SPREAD:\n', src);

    //! CLEAN ARRAY ELEMENTS: b) remove DEFAULT values
    const DELDEF = /[=\s].*$/g;
    src = src.map(el => el.replace(DELDEF, "").trim());
    // console.log('\nREMOVE DEFAULTS:\n', src);

    //! CLEAN ARRAY ELEMENTS: c) remove ALIASED param
    const DELALIAS = /^.*[:\s]/g;
    src = src.map((v) => v.replace(DELALIAS, "").trim());
    // console.log('\nREMOVE ALIASED:\n', src);



    //! return
    return src;
}


//* ================ EXPORT ================
if (typeof module !== "undefined") module.exports = getParams;
