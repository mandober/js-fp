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
