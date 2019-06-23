/*
Arrays and Range


Array.from
==========
Array.from(arrayLike[, mapFn[, thisArg]])
*/
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
Array.from('foo'));                // ["f", "o", "o"]

/*
Array.from() lets you create Arrays from:
1) array-like objects (objects with a length property and indexed elements)
2) iterable objects (objects where you can get its elements, such as Map and Set).

Generate a range (array)
using an array-like object with indexed elements and length prop. 
Since the array is initialized with `undefined` on each position,
the value of `v` below will be `undefined`
*/
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]


Array.from({length: 20}, (v, i) => i);
Array.from(new Array(20), (v, i) => i);

// can be further shortened to one of these forms:
Array.from(Array(20).keys()); // or:
[...Array(20).keys()];

// With lower and upper bounds:
Array.from(new Array(UPPER_BOUND), (_, i) => i + LOWER_BOUND);
Array.from(new Array(10), (_, i) => i + 5);

// Recursive solutions:
const recRange = (a, b) => a > b ? [] : [a].concat(recRange(++a, b));
const rrange = (a, b) => (a >= b) ? [] : [a, ...rrange(a+1, b)];
const rng = (lo, up, Δ = 1) => (lo > up) ? [] : [lo, ...rng(lo + Δ, up, Δ)];



// Array.fill
// ==========
Array(10).fill(1).map((v, i) => v + i);
// ===
Array(10).fill(0).map((_, i) => i);

const range = (start, stop, step = 1) =>
  Array(Math.ceil((stop - start) / step)) // nr. of elements
    .fill(start)                          // fill with start e.g. 1
    .map((v, i) => v + i * step);         // el = start + i * step


const range = (start, stop, step) => {
    let b = start;
    (stop = stop || start) && (start = 1);
    let a = [start];
    while (b < stop) {
        a.push(b += step || 1);
    }
    return a;
}





const range = (start, stop, step=1, offset=0) => {
  var len = (Math.abs(end - start) + ((offset || 0) * 2)) / (step || 1) + 1;
  var direction = start < end ? 1 : -1;
  var s = start - (direction * (offset || 0));
  var stepSize = direction * (step || 1);
  return Array(len).fill(0).map((_, i) => s + (stepSize * i));
}

// inclusive, forward:
range(5,10);        // [5, 6, 7, 8, 9, 10]
// inclusive, backwards
range(10,5);        // [10, 9, 8, 7, 6, 5]
// step, backward:
range(10,2,2);      // [10, 8, 6, 4, 2]
// exclusive, forward  
range(5,10,0,-1);   // [6, 7, 8, 9]
// offset, expand
range(5,10,0,1);    // [4, 5, 6, 7, 8, 9, 10, 11]
// offset, shrink
range(5,10,0,-2);   // [7, 8]
// step, expand
range(10,0,2,2);    // [12, 10, 8, 6, 4, 2, 0, -2]




// RANGES
// ======
// Sequence generator function i.e. range

const range = (start, stop, step) => 
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

range(0, 4, 1); // [0, 1, 2, 3, 4] 
range(1, 10, 2); // [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)); // ["A", "B", ..., "Z"]


// Array comprehensions
Array.from({length: 10}, (_, k) => k + 1); // [1, .., 10]
const range = n => Array.from({length: n}, (_, k) => k+1) ;
Array.apply(null, { length: 10 }).map(eval.call, Number);



// Numbers
[...Array(5).keys()]; // [0, 1, 2, 3, 4]


// Character iteration
String.fromCharCode(...[...Array('D'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
// "ABCD" 


// Iteration
for (const x of Array(5).keys()) {
  console.log(x, String.fromCharCode('A'.charCodeAt(0) + x));
}
// 0,"A" 1,"B" 2,"C" 3,"D" 4,"E"


// As functions
function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
}

function charRange(startChar, endChar) {
  return String.fromCharCode(...range(endChar.charCodeAt(0) -
         startChar.charCodeAt(0), startChar.charCodeAt(0)))
}






// Generators
// ==========
function* range(start = 0, end = 0, step = 1) {
  if (end === 0) {
    end = start;
    start = 0;
  }
  console.log(start, end);
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// iterate over the generator call
for (let i of range(1, 10)) {
  console.log(i);
}

// iterate step-by-step
let it = range(1, 3); // returns iterator
it.next(); // {value: 1, done: false}
it.next(); // {value: 2, done: false}
it.next(); // {value: undefined, done: true}
// once depleted, it continually returns undefined
it.next(); // {value: undefined, done: true}







