# Recursion

JavaScript › Functions › Recursion

Terms:
- Call Stack, Functions
- Recursion
  - Recursion vs Iteration
  - Recursion in FP
  - benefits, hazards (stack overflow)
- Tail-call recursion
- Proper tail-call (PTC)
- Tail-call optimization (TCO)
- Tail-call elimination
- Syntactic tail-calls (STC)
- Dynamic Programming
- Memoization
- Tabulation


**Recursion** means defining a function in terms of itself. To avoid implied diverging behavior, the recursive case must be set up in a way that it converges (reduces) towards the base case(s). Upon hitting the base case the recursion (or at least that recursive branch) obtains the base value, which is used to calculate values of all the previous recursive calls.

Once the base case value is obtained, the stack gets unwound, with each stack frame providing a return value for a previous recursive call.

If the function was using recursion to sum up all the returned values, will add each value (to the running total) as it is popped off the stack, returning the final answer.


One can think of a recursive call as if the function called another function, identical to itself (which then called another one and so on). Just like when one fn calls another, a recursive call creates a new stack frame on the stack; the original function transfers control to the called fn, and then waits for the called fn to return a value, so it can continue. Only, in this case, the control is transferred to (another instance of) itself.

Every iterative loop may be replaced with recursion, but not all recursive solutions may be replaced with iteration (e.g. Ackermann function).

Unlike iteration, recursion has the potential to overflowing the stack, crashing the program. However, being more readable and elegant when compared to iteration, several strategies have been devised to mitigate the stack overflow problem and to optimize recursion: 
- Tail Call Optimization
- Trampolining
- Memoization (dynamic programming)
- Tabulation (dynamic programming)
- Conversion to an iterative loop (by the compiler)


Tail-call recursion is a way to optimize the recursive call so it becomes the sole expression a function returns; that is, the recursive call is the last calculation a function needs to perform before it yields control (to another instance of itself, as is the case with recursion).

Tail Call Optimization feature of JS is underway (landed, then deprecated)
