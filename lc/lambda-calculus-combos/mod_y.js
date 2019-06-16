// ===========================================
// The Y Combinator with JavaScript
// ===========================================

// douglas y:
var y = function(le) {
    return function(f) {
        return f(f);
        }(function(f) {
            return le(
                function(x) { return (f(f))(x); }
            );
        });
    };


(y => y(fib => n => n <= 2 ? 1 : fib(n - 1) + fib(n - 2)
       )(7)
)(le => (f => f(f)
        )( f => le(x => f(f)(x)) )
 ) // 13


// y-combinator
//const y = l => (f => f(f))(f => l(x => f(f)(x)));
const y1 = k => (f => f(f))(f => k(x => f(f)(x)));
