//! Groups

// initialize groups
let groups = {};

//* group: NOTHINGS
// members: undefined, null
groups.voids = [undefined, null];

// group: NOTHINGS
// members: voids(undefined, null), "", NaN
groups.not = groups.voids.concat(["", NaN]);

//* group: FALSIES
// members: nothings(undefined, null, "", NaN), false, 0
//   1e-324 is interpreted as zero,
//   as is any number smaller than 1e-324
groups.falsies = groups.voids.concat([false, "", 0, NaN]);

//* group: INFINITIES
// members: Infinity, -Infinity
groups.infinities = [Infinity, -Infinity];


//* group: EMPTIES
// members:
groups.empties = [];


/**
 * positive zero
 * negative zero
 * 1e-324 is interpreted as zero,
 * as is any number smaller than 1e-324
 */
groups.zeros = [0, -0, 1e-324];



groups.numeric = [NaN, Infinity, -Infinity];

nothings = ["undefined", "null"];
primitives = nothings.concat(["boolean", "string", "symbol", "number"]);
types = primitives.concat(["object"]);



// groups.empty = new Set([ undefined, NaN, "", null, [], {}, (() => ) ]);
groups.primitives = new Set(["null", "undefined", "boolean", "number", "string", "symbol"]);
groups.boxedPrimitives = new Set(["boolean", "number", "string", "symbol"]);
groups.basicNatives = new Set(["pojo", "array", "function", "date", "regexp"]);
groups.es6Natives = new Set(["map", "set", "weakmap", "weakset"]);
groups.dataset = new Set(["pojo", "array", "map", "set", "weakmap", "weakset"]);
groups.staticNatives = new Set(["Math", "Reflect", "JSON"]);
groups.typedArrays = new Set(["DataView", "ArrayBuffer"]);
groups.acceptedArgs = new Set(["pojo", "array", "boolean", "number", "string"]);
groups.iterables = new Set(["string", "array", "map", "set"]);


const littleEndian = new Uint32Array((new Uint8Array([1, 2, 3, 4])).buffer)[0] === 0x04030201; // true if LE
