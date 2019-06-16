
$.ajax(u, function(d){
  console.log(d);
});

let u = "https://github.com/getify/You-Dont-Know-JS/blob/master/";
$.ajax(u, (d) => console.log(d));
