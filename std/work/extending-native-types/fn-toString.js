//? try to get source of a fn together with inner comments:
// fn.toSource() works in browser, but not in node
// fn.toString() works!

function commented (a, b = 5, ...c) {
    //@arity=3
    //@arg1 name=a
    //@arg2 name=b default=5
    //@arg3 name=c rest=true
    return b;
}
// var fn = fun.toString(); /*?*/
// console.log('fn: ', fn);
/*
"function fn(a, b, c = 11) {
    //@arity=3
    //@arg1=a
    //@arg2=b
    //@arg3=c default=11
}"
*/



var args = commented.toString();
var args = args.search(/(:?function)\s*(\w+)\s*\((.*)\)/);

console.log(args);




// var par = fn.replace(/^\s*?(:?function)/, "$1$2$3");
// var fn3 = fn2.split(/\s*,\s*/);
// var res = fn3.map(v => v.replace(/[=\s].*$/, ""));

