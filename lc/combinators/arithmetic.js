// Arithmetic in LC

// successor: λnfx.f(nfx)
const S = n => f => x => f(n(f)(x));

// zero: λsz.z
const Z = s => z => z;

// true: λsz.z
const T = a => b => a;


// Numbers
var c1 = S(Z);
var l1 = s => z => s(z);
// (n => f => x => f(n(f)(x))(s => z => z))

var c2 = S(S(Z));
var c3 = S(S(S(Z)));

var l2 = s => z => s(s(z));
var l3 = s => z => s(s(s(z)));

// Equal to zero: (λfn.nfT)(λx.F) = λn.n(λx.F)T
// (n == 0) -> boolean
var eqz = n => n(x => Z) T);
// (λfn.nfT)(λx.F)
// λn.n(λx.F)T

