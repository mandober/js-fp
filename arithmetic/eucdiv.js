// Euclidean division

// dividend / divisor = (quotient, remainder)
// divisor != 0 ∧ 0 <= remainder < |divisor|
const eucdiv = dividend => divisor => ({ 
    quotient : Math.floor(dividend / divisor),
    remainder: dividend - (Math.floor(dividend / divisor) * divisor),
});



function ed4 (n, d) {
    // case: absolute 
    let na = Math.abs(n);
    let da = Math.abs(d);
    let qa = Math.floor(na / da);
    let ra = na - qa * da;

    console.log("1) " +     na  + "/" +     da  + " = " + "(" +     qa  + "," + ra + ")");
    console.log("2) " +     na  + "/" + (-1*da) + " = " + "(" + (-1*qa) + "," + ra + ")");
    
    let q4 = qa+1;
    let r4 = -1*(na - (q4*da));
    
    //console.log("3) " + (-1*na) + "/" +     da  + " = " + "(" + q3 + "," + r3 + ")");
    console.log("4) " + (-1*na) + "/" + (-1*da) + " = " + "(" + q4 + "," + r4 + ")");
}


//    return {
//      1: {
//        q: qa,
//        r: ra,
//      },
//      2: {
//        q: -1*qa,
//        r: ra,
//      },
//      3: {
//        q: -1*(qa+1),
//        r: n - (-d*(qa+1)),
//      },
//      4: {
//        q: qa+1,
//        r: n - (d*(qa+1)),
//      },
//    };



    //let q,q2,q3,q4, r,r2;
    // case: as is 
    //q = n / d;
    //let q_floor = Math.floor(q);
    //let r_floor = n - q_floor * d;

    //let q_ceil  = Math.ceil(q);
    //q = Math.floor(n / d);
    //r = n - Math.floor(n / d) * d;


function ediv (n, d) {
    let q;
    let r;
    // case 0: div by zero
    if (d === 0) return { q: n, r: d }; 
    
    // case: raw
    q = n / d;
    q_floor = Math.floor(q);
    q_ceil = Math.ceil(q);
    
    // case: absolute 
    let na = Math.abs(n);
    let da = Math.abs(d);
    let qa = na / da;
    let qa_floor = Math.floor(qa);


    // case 1:        0 < n, d
    // case 2:    d < 0 < n
    // case 3:    n < 0 < d
    // case 4: d, n < 0

    // case 1: both positive (absolute), 0 < n, d
    if (n > 0 && d > 0) {
      q = Math.floor(n / d);
      r = n - Math.floor(n / d) * d;
    }
    // get case 1 anyway:
    let q1 = Math.floor(na / da);
    let r1 = na - Math.floor(na / da) * da;
    
    // case 2: positive dividend, negative divisor, d < 0 < n
    if (n > 0 && d < 0) {
    
    }
    // get case 2 anyway:
    let q2 = -1 * q1;
    let r2 = r1;
    
    // case 3: negative dividend, positive divisor, n < 0 < d


    // case 4: both negative, d, n < 0



    q = Math.floor(n / d);
    r = n - Math.floor(n / d) * d;
    
    if (d < 0) {
      q = -1 * q
    }

    // result
    return { q, r };
}

// var {q, r} = ediv( 3,  2) // ( 1, 1)
// var {q, r} = ediv( 3, -2) // (-1, 1)
// var {q, r} = ediv(-3,  2) // (-2, 1)
// var {q, r} = ediv(-3, -2) // ( 2, 1)


// var {q, r} = ediv( 7,  3) // ( 2, 1)    3 *  2 =  6 + 1 ok
// var {q, r} = ediv( 7, -3) // (-2, 1)   -3 * -2 =  6 + 1    (-3,-2)
// var {q, r} = ediv(-7,  3) // (-3, 2)    3 * -3 = -9 + 2 ok
// var {q, r} = ediv(-7, -3) // ( 3, 2)   -3 *  3 = -9 + 2    (2, -1)

// var {q, r} = ediv( 9,  3) // ( 3, 0)
// var {q, r} = ediv( 9, -3) // (-3, 0)
// var {q, r} = ediv(-9,  3) // (-3, 0)
// var {q, r} = ediv(-9, -3) // ( 3, 0)

// var {q, r} = ediv( 25,  6) // ( 4, 1)   4.16 : floor(q) ->  4  q1            r1
// var {q, r} = ediv( 25, -6) // (-4, 1)  -4.16 : ceil(q)  -> -4  q2: -1*q1     r2: r1
// var {q, r} = ediv(-25,  6) // (-5, 5)  -4.16 : floor(q) -> -5  q3: -1*(q1+1) r3: 
// var {q, r} = ediv(-25, -6) // ( 5, 5)   4.16 : ceil(q)  ->  5  q4: q1+1      r4: 

/*
r1=r2, r3=r4
q1,q4 > 0 > q2,q3
q4=q1+1
q1=|q2|, |q3|=q4

*/



