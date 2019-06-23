// ===========================================
// Fibonacci
// ===========================================
fib = n => n <= 2 ? 1 : fib(n-1) + fib(n-2);

// ===========================================
// Factorial
// ===========================================
fac = n => n == 1 ? 1 : fac(n-1) * n;

// ===========================================
// The Y Combinator with JavaScript
// ===========================================
// Long style
var y = function(le) {
    return function(f) {
        return f(f);
        }(function(f) {
            return le(
                function(x) { return (f(f))(x); }
            );
        });
    };

// single expr style (and application)
(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(le => (f => f(f)
        )( f => le(x => f(f)(x)) )
 ) // 13
