// Road to manad

// Before:
//   f :: b -> c
//   g :: a -> b
// g.f :: a -> c
abs = x => x < 0 ? -1*x : x;
sba = x => x > 0 ? -1*x : x;
abs(sba(5))

// These funcs were nicely composable before introducing the requirement
// that they should also log when they are called i.e. now they return the array
// with the result at index 0 and their name as string at index 1.
// They are composable no more.

// They were accepting 1 arg and returned a value.
// They still expect 1 arg but now that arg is an array of 2 elements.
// And so is the value they're returning.

// helper logger: identify the caller by name as string
function who(){return who.caller.name + " " }

// abs :: b -> c
abs = x => [x < 0 ? -1*x : x, who()];
// sba :: a -> b
sba = x => [x > 0 ? -1*x : x, who()];

/*
As this is JS, seemingly nothing changed in sig, but all funcs now must accept and 
return 2-element array (no tuples in JS), such that: 
[T, String]
where T the type of result, String is the func's name to log.

The problem arises with the first call to one of these functions: 
we can't just called it with T arg as before, but as the array where the T arg
is at index 0 and String arg at 1. But what should the string be? 
Well, it's the empty string, ϵ, of course! yey! We got a unit pair: (arg, ϵ)

After:
   f :: a -> [b, String]
   g :: b -> [c, String]
 g.f :: a -> [c, String]

So now the compose HOF:
    h = compose(p, q)

When h(f,g)
* destructure the input pair [4, ""] into (a v1, String str1)
* apply f to v1 capturing the result of that as pair1:
   pair1 = f([4, ""]) 
* destructure pair1 into (a v2, String str2)
* apply g to v2 capturing the result of that as pair2
* destructure pair2 into (b v3, String str3)


3. p is definitely a pair, so destruct it into (b, str2)
4. apply the func g to a and capture the result in p2
5. p is a pair, so destruct it into (b, str2)
6. return a new pair: (b, str1+str2)
 
 
*/ 

flip = x => [~x + 1, who()]
flip(6) // [-6, "flip "]

abs = x => [x < 0 ? -1*x : x, who()]
























