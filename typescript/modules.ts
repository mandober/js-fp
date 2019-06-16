/*
Modules in TS

Convince TypeScript that names (require, define, etc.) exist:

    // For Node/CommonJS
    declare function require(path: string): any;

    // For RequireJS/AMD
    declare function define(...args: any[]): any;


Or use TypeScript syntax for imports.

First, enable some module system by setting TypeScript's module flag.
Valid options: commonjs, amd, system, umd.


If you had the following Node/CommonJS code:
    var foo = require("foo");
    foo.doStuff();

or the following RequireJS/AMD code:
    define(["foo"], function(foo) {
        foo.doStuff();
    })

then you would write the following TypeScript code:
    import foo = require("foo");
    foo.doStuff();


*/

import getInfoFn = require("./get_info_fn");


console.log("FnInfo: " + getInfoFn(a=>a));
console.log("FnInfo: " + getInfoFn(a=>()=>a));


// declare function ann(f: (x: number) => number, ...nums: number[]): number;

function ann(f: (x: number) => number, ...nums: number[]): number[] {
    return nums.map(f);
}


function sq(x: number): number {
    return x * x;
}

console.log( ann(sq, 2, 3, 4, 5) );
