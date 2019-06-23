// LC

// COMBINATORS
const I = a => a;                    // λa.a 
const M = f => f(f);                 // λf.ff 
const K = a => b => a;               // λab.a 
const KI =a => b => b;               // λab.b
const C = f => a => b => f(b)(a);    // λfab.fba 
const S = n => f => x => f(n(f)(x)); // λnfx.f(nfx)

// Synonyms
const id          = IdiotBird   = I;
const selfapply   = Mockingbird = M;
const fst = True  = Kestrel = T = K;
const snd = False = Kite    = F = KI;
const flip        = Cardinal    = C;
const succ        = Starling    = S;

// Projection
const makeProj = index => arity => {
  if(index > arity) arity = index;
  var r = "";
  for(j = 1; j <= arity; ++j)
      r += "a" + j + "=>";
  r += "a" + index;
  return eval(r);
};

// Logical operators
const AND   = p => q => p(q)(p); // λpq.pqp = λpq.pqp
const IMPLY = p => q => p(q)(T); 
const OR    = p => q => p(T)(q);
const XOR   = p => q => p(F)(q);
const NOT   = p => p(F)(T);

// IF-THEN-ELSE
// predicate is an expr that evals to a boolean,
// and if that resulting boolean is T, predicate "selects" the 1st arg;
// if the resulting boolean is F, predicate "selects" ("returns") the 2nd arg.
const Ternary = pred => T_part => F_part => pred(T_part)(F_part);
// λlmn.lmn


// NUMBERS

// Zero: λsz.z
const Z = s => (z=0) => z;

const z1 = () => 0;
//const c02= () => o => o;

const Inc = x => ++x;
const Dec = x => --x;

const c1 = s => z => s(z);
// c1 = S(Z)
//     [n=>f=>x=>f(n(f)(x))] (s=>z=>z)
//         f=>x=>f(n(f)(x))  [n := (s=>z=>z)]f(n(f)(x))

// c2 = S(S(Z))
const c2 = s => z => s(s(z));


// ANY NUMBER
//
//   0 = z
//   1 = s(z)
// n+1 = n(s)(z)
//   5 = 4(s)(z) = s(s(s(s (s(z)))))
//   4 = 3(s)(z) = s(s(s( s(z))))
//   3 = 2(s)(z) = s(s( s(z))))
//   2 = 1(s)(z) = s( s(z))
//   1 = 0(s)(z) = s(z)
//   0 = z

// ARITHMETIC
// PLUS
// λmnfx.mf(nfx)
const PLUS = m => n => s => z => m(s)( n(s)(z) );


//PLUS C1 C1
//= (λm.λn.λs.λz.     m     s(     n      sz)) (C1) (C1)   | [C1/m, C2/n]ms(nsz)
//       = λs.λz.    (C1)   s(    (C1)    sz)              | subst. symbols
//       = λs.λz. (λw.λt.wt)s( (λf.λy.fy) sz)
//       = λs.λz. (λt.st)((λf.λy.fy)      sz)
//       = λs.λz. (λt.st)(sz)
//       = λs.λz. s(sz)
//= C2


// ===============================
// Funcs as the 1st class citizens
// ===============================

// NON/POINT-FREE
//
// g and h are the same - the g func:
const g = cb => process(data => cb(data));
// is the same as:
const h = process;
// cuz the line:
//    process(data => cb(data));
// is the same as:
//    process(cb);

// this:
get = cb => ajax(json => cb(json));
// ...same as:
get = ajax;

// reason both are equivalent: this line:
ajax(json => cb(json));
// ...is the same as this line:
ajax(cb);
// so refactor:
get = cb => ajax(cb);
// ...which is equivalent to this
get = ajax;

// Another example:
inc1 = d => ++d;      // original func
inc2 = n => inc1(n);  // no need
inc3 = inc1; // =d=>++d; // ...when this is enough
// calls:
inc3(4); // 5
inc1(4); // 5
inc2(4); // 5 because inc2(4) » inc1(4) › 5
// so it is equiv. to inc1(4) 
// or to direct call  inc3(4)


// so, if:
inc = x => ++x;
add = x => inc(x);

// then:
g = cb => inc(d => cb(d));
g = cb => inc(cb);
g = inc;
g = x => inc(x);

// (g => x => g(x))(inc) =
//       x => inc(x) = 
