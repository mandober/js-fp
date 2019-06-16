# The 10 Commandments

1. Questions to ask when recurring on a...
  - number:        ask 2 q: `(zero? n)`                      and `else`
  - list of atoms: ask 2 q: `(null? la)`                     and `else`
  - list of sexpr: ask 3 q: `(null? sx)`, `(atom? (car sx))` and `else`

2. Use `cons` to build lists

3. When building a list, describe the first typical element,
   and then `cons` it onto the natural recursion.

4. Always change at least one argument while recurring.
    - when recurring on a list of atoms use `(cdr la)`.
    - when recurring on a number use `(sub 1 n)`.
    - when recurring on a sexpr list use `(car sx)` and `(cdr sx)`
      if neither `(null? sx)` nor `(atom? (car sx))` are true.
  It must be changed to be closer to termina­tion.
  The changing arg must be tested in the termination condition:
    - when using `cdr`, test termination with `null?`
    - when using `sub 1`, test termination with `zero?`

5. When building a value with...
    - `+` use `0` for the terminating line.
    - `x` use `1` for the terminating line.
    - `cons` consider `()` for the terminating line.

6. Simplify only after the function is correct.

7. Recur on the subparts that are of the same nature:
    - on the sublists of a list.
    - on the subexpressions of an arithmetic expression.
    
8. Use help functions to abstract from representations.

9. Abstract common patterns with a new function.

10. Build functions to collect more than one value at a time.


## The 5 Rules (Laws)

1. car
      The primitive `car` is defined only for non-empty lists.

2. cdr
      The primitive `cdr` is defined only for nonempty lists.
      The `cdr` of a non-empty list is always another list.

3. cons
      The primitive `cons` takes 2 arguments.
      The second arg must be a list.
      The result is a list.

4. null?
      The primitive `null?` is defined only for lists.

5. eq?
      The primitive `eq?` takes 2 arguments.
      Each must be a non-numeric atom.

