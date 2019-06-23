/*
            Y combinator from Lambda Calculus in JS:
           Doing recursion with annonymous functions

In Lambda Calculus all functions/expressions are annonymous; however, recursion
can still be achieved by using Y combinator. We start the investigation by
analyzing self-application and the omega combinator: ω = λf.ff


(λf.ff)(λg.λx.g(xx)) ↦
(λg.λx.g(xx)(λg.λx.g(xx)


(λg.λf.ff)(λf.g(λx.f(fx))


The problem with recursion when annonymous functions are involved is that
we cannot refer to any function (they're annonymous), so a function cannot
recursively call itself for that requires that it has a name.

*/


// =================
// Y combinator: ES5
// =================
var y = function(g) {
    return function(f) {
        return f(f);
    }
    (function(f) {
        return g(
            function(x) {
                return (f(f))(x);
            }
        );
    });
};


// =================
// Y combinator: ES6
// =================
const Y = g => f => f(f)(f => g(x => f(f)(x)));
const y = g => f => f(f)(f => g(x => f(f)(x)));
const y2= g => (f => f(f))(f => g(x => f(f)(x)));


// ====================================
// Y combinator: single annonymous expr
// ====================================

// naive factorial is named function, referred to as `fac`
const fac = x => x < 2 ? 1 : x * fac(--x);

// to have annonymous fac function we need to pass it as arg (param has a name)

(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2))

(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2))(7)


// ================================
// Y combinator: application to fib
// ================================
(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(g => (f => f(f)
        )( f => g(x => f(f)(x)) )
)
// 13
