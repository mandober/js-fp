/*
Ways to get function's arity:

1) arguments
   + automatic
   - not useful since it works only when function is actually called, and for that specific call only.
   - not practical

2) fn.length
   + automatic
   - very unreliable becasue it works only for very simple functions,
     where parameters do not have default values and do not use destructuring.
   + useful exclusively for plain params affect function's `length` property.
   - imprecise

3) fn.argsProperty
   Manually defining propery on a fn that will thoroughly describe fn's params (more than length does)
   - manual
   - precise
   - might require control over function's definition (futile if fn obj is frozen or sealed).

4) comments inside fn - requires source control
   - manual
   + precise
   - requires control over function's definition.
   - requires established regex for parsing comments.

5) explicit param - requires manual args passing.
   Explicitly provide function's arity as a param to a higher fn.
   - manual
   + does not require control over function's definition.
   + precise


6) toString()
   Dumping fn's source to string,with toSource() or toString(), than parsing it.
   - manual
   + does not require control over function's definition.
   + potentially precise
     provided a perfect parsing regex thta can deal with
     destructuring patterns and default params;
     e.g. nested object destructuring along with default values

*/


