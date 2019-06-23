# Dynamic Programming

## In math
**Dynamic Programming**, a method of mathematical optimization and computer programming, refers to approaching a complex problem by dividing it recursively into simpler sub-problems.

A problem has *optimal substructure* if an optimal solution can be constructed from optimal solutions of its sub-problems. 

If the sub-problems could be nested recursively in a larger problem, then there exists a relation, called *Bellman equation*, between the value of the larger problem and the values of the sub-problems. 


## In CS
DP is a technic used to optimize computation by caching previously computed values. For example, a naive implementation of Fibonacci function will have some duplicated computation steps; factorial function can benefit because the results of previously input number are readily available (calculating factorial of 20 is a lot easier if there's cached result for 19).
