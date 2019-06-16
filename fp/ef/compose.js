// Compose

const compose = (...fns) => (...args) =>
  fns.reduceRight(
    (res, fn) => [fn.call(null, ...res)],
    args
  )[0];


let cb = (pre, cur, idx, arr) => {
  console.log("pre: " + pre);  // 10
  console.log("cur: " + cur);  // 5
  console.log("idx: " + idx);  // 4
  console.log("arr: " + arr);  //| [1,2,3,4,5]
  return pre + cur;
};

// let res = [1,2,3,4,5].reduceRight(cb, 10);
// console.log("res: " + res); // 25


// compose

// compose binary, ternary
const compose2 = f => g => x => f(g(x));
const compose3 = f => g => h => x => f(g(h(x)));

// f = [g, h, i, j], x -> g(h(i(j(x))))
const composeN = (...f) => x =>
  f.reduceRight( (prevVal, currFn) => currFn(prevVal), x );


const composeInsideOut2 = f => g => x => g(f(x));
const composeInsideOut3 = f => g => h => x => h(g(f(x)));


// f1 . f2 . f3 . x -> f3(f2(f1(x)))

// unary fns
let f1 = n => n + 1;
let f2 = n => n * n;
let f3 = n => n + n;

// let res = composeN(f1, f2, f3)(0);
// console.log("res: " + res); // 10


// compose N fns where each takes M args
// [f1,...,fN] [x1,...,xM]
let g1 = (...x) => x.map(f1);
let g2 = (...x) => x.map(f2);
let g3 = (...x) => x.map(f3);


const composeNM = (...fs) => (...xs) =>
  fs.reduceRight( (prevArrVal, currFn) => prevArrVal.map(currFn), xs );
  // fs.reduceRight( (prevArrVal, currFn) => xs.map(prevArrVal.map(currFn)), xs );


// console.log("g1: " + g1(1,2,3,4));
// console.log("g2: " + g2(1,2,3,4));
// console.log("g3: " + g3(1,2,3,4));

// compose N fns where each takes 1 arg
let res = composeNM(f1, f2, f3)(2, 3, 5, 7, 11, 13, 17, 19);
console.log("res: " + res);
