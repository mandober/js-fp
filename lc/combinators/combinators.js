// LC Combinators

// α β γ δ ϵ ζ η θ ι κ λ μ ν ξ o π ρ σ τ υ ϕ χ ψ ω
// Γ Δ Θ Λ Ξ Π Σ Υ Φ X Ψ Ω   ϐ ∂ ε ϑ ϰ ϖ ϱ φ ς
// Ϙ ϙ ϝ Ͳ ϟ ϡ ϛ  ά ή έ ί ό ύ ώ    ✗ ✘ ✓ ✔

// Idiot bird (1)
const I = a => a;
    // lambda: λa.a
    // arity : 1
    // usage : identity
    // haskel: id 5 == 5
    // Ix -> x

// Mockingbird (1)
const M = f => f(f);
    // lambda: λf.ff
    // arity : 1
    // usage : self-application
    // A.K.A.: omega, ωμέγα, Ω
    // haskel: (cannot define)
    // ωω = ωω = ... = ωω = Ω


// Kestrel (2)
const K = a => b => a;
    // lambda: λab.a
    // arity : 1
    // usage : first, const
    // A.K.A.: True, T, fst, first
    // haskel: const 7 5 == 7
    //
    // const K2 = fst => () => fst;
    // K I x -> I
    // K I x y -> (K I x) y -> I y -> y


// Kite (2)
const KI = a => b => b;
    // lambda: λab.b
    // arity : 2
    // usage : second
    // A.K.A.: False, F, snd, second
    // haskel: const id 5 4 == 4
    //
    // λab.b = K I = C K
    // KI = K I x y


// Cardinal (3)
const C = f => x => y => f(y)(x);
    // lambda: λfab.fba
    // arity : 3
    // usage : reverse args
    // A.K.A.: negation, Not
    // haskel: flip
    //
    // C  K I M -> K M I -> M
    // KI K I M -> K M I -> M
    //
    // K=T, KI=F
    // C F = T
    // C T = (λfxy.fyx)(λab.a)
    //     =  λxy.(λab.a)yx
    //     =  λxy.(λb.y)x
    //     =  λxy.(y)
    //     =  λxy.y = F


// Starling (3)
const S = f => g => x => g(f(g)(x));
    // lambda: λnfx.f(nfx)
    // arity : 3
    // usage : reverse args
    // A.K.A.: S, successor, succ
    // haskel: flip



/*
Bluebird

3.3
λabc.abc = λabc.(ab)c
λabc.a(bc) // B
λabc.acb   // C
λabc.cba   // F
λabc.cab   // V

3.4
λabc.aabc =
λabc.(aab)c =
λabc.((aa)b)c

S:
λabc.a(abc)
λabc.a((ab)c)

λabc.a(a(bc))

*/
