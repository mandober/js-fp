/*
    Y Combinator from Lambda Calculus in JS

    ω = λf.ff

    (λf.ff)(λg.λx.g(xx))
    (λg.λf.ff)(λf.g(λx.f(fx))
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
const Y = g => f => f(f)

const y = g => f => f(f) (f => g(x => f(f)(x)));



// =================
// Y combinator: ES6
// =================
(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(g => (f => f(f)
        )( f => g(x => f(f)(x)) )
) // 13


//const y = l => (f => f(f))(f => l(x => f(f)(x)));
const y1 = k => (f => f(f))(f => k(x => f(f)(x)));
