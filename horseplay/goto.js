/*
GOTO in JS

https://stackoverflow.com/questions/9751207/how-can-i-use-goto-in-javascript

https://alexsexton.com/blog/2009/07/goto-dot-js/

*/


  var i = 0;
  start:
    while(true) {
      console.log("goto!");
      i++;
      if(i < 538) continue start;
      break;
    }
