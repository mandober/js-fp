// Async and sync

// sync: forEach
[1,2,3,4].forEach(function cb(i) {
    console.log(i);
});

// sync + arrow: forEach
[1,2,3,4].forEach(i => console.log(i));

let cb1 = i => console.log(i);
[1,2,3,4].forEach(cb1);

// async: forEach + setTimeout
[1,2,3,4].forEach(function fe_cb(i) {
    setTimeout(function st_cb() { 
          console.log(i);
    }, 0);
});

// async: forEach + setTimeout  WRONG! (SYNTAX ERROR)
//[1,2,3,4].forEach(
//    setTimeout(function cb(i) {
//        console.log(i);
//    }, 0)
//);

// async + arrow: forEach + setTimeout
[1,2,3,4].forEach(i => setTimeout(() => console.log(i), 0));

// let cb_st = x => console.log(x);
let cb_fe = i => setTimeout(() => console.log(i), 0);
[1,2,3,4].forEach(cb_fe);



[1,2,3,4].forEach(
    // forEach takeas a cb (with 1 param min)
    i => setTimeout(
        // setTimeout takeas a cb
        () => console.log(i), 0
    )
);


/*
Making async forEach func
=========================
*/

// async fn: forEach + setTimeout
function forEachAsync2(arr, cb) {
  arr.forEach(function () {
    setTimeout(cb, 0)
  });
}
// not good: returns undefined!
forEachAsync2([1,2,3,4,5], function (i) {
  console.log(i)
});


// forEachAsync:
let forEachAsync = (arr, cb) => arr.forEach(cb);
let a = [1,2,3,4,5];
let cb_fe = i => setTimeout(() => console.log(i), 0);
forEachAsync(a, cb_fe);








