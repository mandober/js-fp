var one = {
    a: "one",
    b: [5,6],
    c: "three",
};

// one;
// var { a, b, c } = one;
// a;
// b;
// c;

// copy properties
var o = { a, b, c } = one;
o;

var {
    a:x = "string",
    b:y = "number",
    c:z = "array",
} = one;

var o2 = {x, y, z};
o2;
Reflect.ownKeys(o2); /*?*/
