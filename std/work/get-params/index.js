
function   fn(a,
...b) {
	b;
        return    a;
}


// step 1: toString()
var str = fn.toString();
console.log('step 1.');
console.log(str);


// step 2: clear up new lines, excessive spaces
console.log('\nstep 2.');

//var str = toStr.replace(/[\r\f\0\n\t]*/g, "");
//console.log(str);

var str = str.replace(/\s{2, }/, " ");
console.log(str);



// step 2:
console.log('\nstep 3.\n');

var re = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/;

var rpl = str.replace(re, "$1$2$3"); /*?*/
console.log(rpl);



// step 3:
var re2 = /\s*,\s*/;
var spl = rpl.split(re2); /*?*/
console.log(spl);


// step 4:
var re3 = /[=\s].*$/;
var arr = spl.map(v => v.replace(re3, "")); /*?*/
console.log(arr);
