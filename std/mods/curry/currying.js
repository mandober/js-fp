// Partial application

// Old ES3 version:
// function crock(f) {
//   var args = arguments.slice(1);
//   return  function() {
//     return f.apply(null, args.concat(argumnets.slice()));
//   } 
// }
//
// var inc = curry(add, 1);
// inc(3);

const curry = (f) => () => f.apply(null, arguments.slice(1).concat(arguments.slice()));

var add = (a, n) => a + n;



var sab = curry((a,n)=>a+n);
var app = curry((a, b, c) => a(b)(c); // FROM TO: a => b => c => a(b)(c)


var sum = (...x) => x.reduce(add); // = x.reduce((a,x)=>a+x);






function aaa(x) {
  console.log(x);
  return;
}
