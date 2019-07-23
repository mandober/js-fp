// Y combinator with factorial

const fac = n => !n ? 1 : n * fac(n - 1);
fac(5); // 120

const make = f => n => !n ? 1 : n * f(n - 1);
make(fac)(5); // 120

const fuck = f => n => !n ? 1 : n * f(f)(n - 1);
fuck(fuck)(5); // 120

const M = f => f(f);
M(fuck)(5); // 120

const S = x => x+1;
const P = x => x+1;

const add = x => y => y==0 ? x : S(add(x, P(y)));

const fa  = (f => n => !n ? 1 : n * f(f)(n - 1))
            (f => n => !n ? 1 : n * f(f)(n - 1))

// application f(f)
(g => m => !m ? 1 : m * g(g)(m-1)) (f => n => !n ? 1 : n * f(f)(n-1))(3)
(g => m => !m ? 1 : m * g(g)(m-1) ) (f => n => !n ? 1 : n * f(f)(n-1))(3)
(m => !m ? 1 : m * [f=>n=>!n?1:n*f(f)(n-1)] [f=>n=>!n?1:n*f(f)(n-1)] (m-1))(3)
