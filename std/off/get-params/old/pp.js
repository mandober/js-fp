function pp(fn) {
    'use strict';

    const STRIP_COMMENTS = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/mg;

    //! EXTRACT
    // const OG2 = /^(?:(?:function.*\((.*[\n\v\r\t]*.*)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/gm;
    // const PX1 = /(?:\s*function\s *.*\((.*)\).*|.*\((.*)\).*|.*\s *=\s * (.*)(?==>)).*/gm;
    // const PX2 = /(?:\s*function\s*.*\(\s*(.*)\s*\).*|.*\(\s*(.*)\s*\).*|.*\s*=\s*(.*)(?=\s*=>)).*/;
    // const PX3 = /(?:\s*function\s*.*\(\s*(.*?)\).*|.*\(\s*(.*)\s*\).*|.*\s*=\s*(.*)(?=\s*=>)).*/gm;
    const OG1 = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/gm;
    s = s.replace(OG1, "$1$2$3");
    console.log('\nEXTRACT:\n', s);


    //! COMPLEXITY: IS DESTRUCTURING USED
    // { x: a, y: b, z: c } = { }
    const DESTR = /\s*(:?[\[\{])\s*([^]*?)(:?[\]\}])\s*=\s*\1\s*\3/gm;
    console.log('\nDESTR:', DESTR.test(s)); //?

    // { x: a, y: b, z: c } = { x: 22, y: 33, z: 44 }
    const DESTR2 = /\s*(:?[\[\{])\s*([^]*?)(:?[\]\}])\s*=\s*\1\s*\3/gm;
    console.log('\nDESTR2:', DESTR2.test(s)); //?

    if (DESTR.test(s)) {
        [, , s] = DESTR.exec(s); //?
        console.log('\nUNDESTR:', s);
    }

    //! MAKE ARRAY: SPLIT
    const SPLIT = /\s*,\s*/;
    s = s.split(SPLIT);
    console.log('\nSPLIT:\n', s);


    //! CLEAN ARRAY ELEMENTS: whitespace
    s = s.map(v => v.trim());
    console.log('\nWHITESPACE:\n', s);

    //! KILL SPACE
    s = s.map(v => v.replace(/\s{1,}/g, "").trim());
    console.log('\nKILLSPACE:\n', s);


    //! CLEAN ARRAY ELEMENTS: remove SPREAD operator
    s = s.map(v => v.replace(/\.{3}/, "").trim());
    console.log('\nSPREAD:\n', s);


    //! CLEAN ARRAY ELEMENTS: remove DEFAULT values
    // x : a = 5 + 6, b  -->   x:a, b
    const DV = /[=\s].*$/g;
    s = s.map((v) => v.replace(DV, "").trim());
    console.log('\nDEFAULTS:\n', s);

    //! CLEAN ARRAY ELEMENTS: remove ALIASED param
    // [a:x] ---> [a]
    const PALIAS = /^.*[:\s]/g;
    s = s.map((v) => v.replace(PALIAS, "").trim());
    console.log('\nALIASED:\n', s);

    //! CHECK ARRAY
    console.log('\nARRAY:\n', s);

    //! RETURN
    return s;
}
