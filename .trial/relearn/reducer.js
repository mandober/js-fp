// re-impl reduce 4 fun
const reducer = f => (...arr) => {
    // arr.reduce(m)
    // [4,2,3].reduce((a,b) => a+b)
    // 1) agg:0, x:4 -> agg=0+4=4
    // 2) agg:4, x:2 -> agg=4+2=6
    // 3) agg:6, x:3 -> agg=6+3=9
    // 4) return 9
    let agg = 0;
    let i = 0;
    while (i < arr.length) {
      agg = f(agg, arr[i++]);
    }
    return agg;
}

const add = a => b => a+b;

const doWhile = (i=0) => (f=add) => (...m) {

  while (i < arr.length) {
    agg = f(agg, arr[i++]);
  }
 
  return;
  
}
