/* PROJECTION

mkProj = (index) => (arity) => 
    a1 => a2 => a3 => a1;

The call:
    mkProj(1)(3);
    
amounts to:
    mkProj = (index) => (arity) => a1 => a2 => a3 => a1;

It returns a function taking the 1st arg, a1,
that returns a function taking the 2nd arg, a2,
that returns a function taking the 3rd arg, a3,
which returns the 1st arg, a1.

*/


// Make Projection fns: n=arity, i=index
//      mkProj(n,i) = "a1 => a2 => ... => an => ai"
//  Examples:
//      T=mkProj(2,1), I=mkProj(1,1), F=mkProj(2,2)
//      T=mkProj(2,1) = (a1 => a2 => a1)
//
export default const mkProj = (index) => {
    // index must be a natural number
    if (!Number.isInteger(index)) throw new Error('index must be a positive integer');

    return (arity) => {
        // arity must be a natural number
        if (!Number.isInteger(n)) throw new Error('arity must be a positive integer');

        // if index > arity, force arity to be equal to index
        if (index > arity) arity = index;
        
        // create arity-number of functions, as string: "a1=>...=>an=>ai"
        var str = "";
        for (j = 1; j <= arity; ++j) {
            str = str + "a" + j + "=>";
        }
        str = str + "a" + index;
        
        // eval the string, return the function
        return eval(str);
    }
};

/*
Or, maybe use the Function constructor? No:
[MDN] Calling the constructor directly can create functions
dynamically, but suffers from security and similar (but far
less significant) performance issues to eval. However, unlike
eval, the Function constructor creates functions which execute
in the global scope only.

[new] Function ([arg1[, arg2[, ...argN]],] functionBody)

return Function("a1", "return a2 => a3 => a1;");
*/


// PROJECTION: USAGE
// var P = i => (...x) => x[i];

// PROJECTION: USAGE
// var P12 = T = mkProj(index=1, arity=2);
// var P22 = F = mkProj(index=2)(arity=2);


// PROJECTION: EXPORT
// export const repeat = (string) => `${string} ${string}`;

