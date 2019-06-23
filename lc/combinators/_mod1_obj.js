// main js entry point

var λ = {
    x: 42,
    getX: function() {
        return this.x;
    },
    getX2: () => this.x,


    version: 101,

    init: function () {
      "use strict";
      console.log("𝝀α-λα-𝛌α-𝜆α λα 𝜆αμβδα");
    },

    // proj
    proj: (i) => {
        if (!Number.isInteger(i))
        throw new Error('i must be a positive integer');

        return (n) => {
            if (!Number.isInteger(n))
            throw new Error('n must be a positive integer');

            // if index > arity, reset arity to be equal to index
            if (i > n) n = i;

            // start forming functions as a string:
            //      "a1 => ... => an => ai"
            var r = "";
            for(j = 1; j <= n; ++j) r = r + "a"+ j + "=>";
            r = r + "a" + i;

            // eval the string
            return eval(r);

        }
    },

    // succ
    S: w => y => x => y(w(y)(x)),

    // zero
    Z: s => z => z,

    // bool
    T: a => b => a,
    F: a => b => b,

    // Idiot, Mockingbird
    I: x => x,
    M: f => f(f),

    // Y-combo
};

λ.init();
