// Lambda Calculus with JS

// Primitive recursive functions

// PROJECTION
var P = i => (...x) => x[i];

// ZERO
var Z = (...x) => 0;

// SUCCESSOR
//var S = x => ++x;
const S = t => i => k => i(t(i(k)));



//var proj1 = proj(0);
//var proj3 = proj(2);
//var sp3 = (...x) => succ(proj3(...x));


const M = h => h(h);
//const D = f => _(x => f(f)(x));




const y = h => (f => f(f))(f => h(x => f(f)(x)));



// ==============================


// compose(f, g)    =   f(g(...))
// compose(h, f, g) = h(f(g(...)))
// compose(f, [g1,...,gn]) = f(g(X),...,g'n(X))
// g(x1,x2,...,x'k)
// f(g1(x1,x2,...,xk), g2(x1,x2,...,xk), ..., g'n(x1,x2,...,xk) )
// ==============================
/* PRIMITIVE RECURSION

R:h = ρ(f, g) =
base: h(0, x)    = f(x)
prec: h(S(y), x) = g(y, h(y,x), x)

add:: f: P(1), g: C(S,P(3))
h = ρ(f,g) = ρ(P(1), C(S,P(3)))
h =

*/
// ==============================
//var R = (f, g) =>  (...x) => {
    // base
//    if (x == 0) return f(x);
//    else        return g(x);
//}

// R(p1, sp3)
//var p1 = P(0);
//var sp3 = C(S, P(2))

// id
// var I = x => x;

// first/true
//var T = fst = P(0);
//var t = x => y => x;

// second/false
//var F = snd = P(1);
//var f = x => y => y;


// add
//var add2 = (a, b) => a + b;
//var adder = a => b => a + b;


