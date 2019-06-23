/* impl Array.reduce

Array.reduce accepts:
  1. Callback function, `cb`
  2. Initial accumulator value (optional), `start`

    [].reduce(cb, start);

Callback function accepts up to 4 params which will be supply with:
  1. previous (accumulator) value, `acc`
  2. value of the current array element, `curr`
  3. index of the current array element, `index`
  4. the entire array itself, `arr`

    [].reduce(function cb(acc, curr, index, arr) {
        // e.g. sum up the array:
        acc + curr
    }, start);


TRACE:
  [4, 2, 3].reduce((a,b) => a + b)
    1: agg:0, x:4 -> agg=0+4=4
    2: agg:4, x:2 -> agg=4+2=6
    3: agg:6, x:3 -> agg=6+3=9
    4: 9


EXAMPLES:
  [1, 2, 3].reduce((a, b) => a + b)     // 6
  [1, 2, 3].reduce((a, b) => a + b, 0)  // 6

  a.reduce((acc, el, ix, arr) => {
    arr.push(acc+el);
    console.log(arr);
    return acc + el;
  });
  // returned: 6
  // mutated a = [1, 2, 3, 3, 6]

*/


const reduceArray = (arr, cb, acc) => {
  let i = 0;
  acc = acc !== undefined ? acc : (i=1, arr[0]);

  // console.log("arr:", arr);
  // console.log("cb :", cb.toString());
  // console.log("init:", acc, '\n');

  for (; i < arr.length; ++i) {
    // console.log("arr:", arr);
    // console.log("ind:", i);
    // console.log("val:", arr[i]);
    // console.log("acc:", acc);

    // console.log(`cb(acc=${acc}, v=${arr[i]}, i=${i}, arr=[${arr}]) =`,
    //              cb(acc, arr[i], i, arr), '\n');
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}


console.log(reduceArray(
  [5, 6, 7],
  (a, b) => a + b,
  0
));



let cb = (a, b) => a*b;
let a = [2, 3, 5];
let r = reduceArray(a, cb, 1);
console.log(r);
