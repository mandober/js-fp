# Tail Call

ECMAScript 6 specs supports *Tail Call Optimization*. TCO is a mitigation technic for handling recursive functions in a way that does not risks overflowing the stack. In fact,this is achieved without growing the call stack further, beyond the initial call.

In order to take advantage of TCO, the recursive case expression needs to be in the tail position. *Tail position* in a function is the last expression, the very last "thing" a function does before returning. If a function "does something" other then making the recursive call, it is not in tail position.

For example:

```js
const f = x =>
  x <= 0
    ? 1           // base case
    : x * f(x-1); // recursive case
```

here, the recursive case consists of the expression, `x * f(x-1)`, in which the recursive call, `f(x-1)` is not the sole operation; it is accompanied with a multiplication that effectively ruins the tail-call. Without it, this would be a tail-call, fo sho.

When a tail call is made form a tail position, there is no need to keep the current stack frame because no useful information remain there - everything useful is "sent" with the (recursive) call - so the same stack frame may as well be reused to manage the next call.


## Function application expression in JS
Function application (calling a function) belongs to the category of JS expressions (rather then statements), as it always returns a value, even if that value is `undefined` as is the case of a procedure, which is a function only used for side-effects.

Function application has several forms:
- Function call:                  `fn(a1,...,aN)`
- Direct method call via call():  `fn.call(this, a1,...,aN)`
- Direct method call via apply(): `fn.apply(this, [a1,...,aN])`
- Dispatched method call:         `obj.method(a1,...,aN)`

## Tail call expression
An arrow function allows for a very compact form provided its body consists entirely of a single expression (otherwise braces and the `return` keyword is needed).

JS operators that may contain a subexpression in the tail-position:
- ternary conditional operator
- logical disjunction
- logical conjunction
- comma operator


Examples of tail call positions:

```js
// both function calls are in tail position:
const ternary = _ => _ ? f() : g();

// both function calls are in tail position:
const and = _ => f() && g();

// only g is a tail position:
const or = _ => f() || g();

```

The result of the `||` operator depends on the result of its left-hand side expression - if that expression evaluates to true the right-hand side expression is never evaluated,
