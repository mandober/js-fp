/*
Stringify a function
*/

function functionToString(fn) {
    'use strict';
    
    // regexp: match comments 
    // let RE_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    // literal notation compiles regexp on evaluation
    const RE_COMMENTS = new RegExp(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/, 'mg');
    
    // regexp: match parenthesis containing params of a function
    const RE_PARENS = /^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/mg;
    
    // regexp: match whitespace
    const RE_WS = /[\s]/mg;

    // regexp: match consequtive whitespaces
    const RE_CONSEQUTIVE_WS= /[\s]{2,}/mg;


    let src = fn.toString().trim();
    
    // strip comments
    src = src.replace(RE_COMMENTS, '').trim();
    
    // squeze whitespace
    src = src.replace(/[\s]{2,}/mg, " ").trim();
    
    // strip whitespace
    //src = src.replace(RE_WS, "").trim();
    
    // extract function params
    let params = src.match(RE_PARENS);

    return params;
}


var add1 = 
  a   /* blaah */ => 
    b /* blaah */ => 
      a   +  b;
functionToString(add1); // "a => b => a + b"
add1.toString().match(/=>/mg).length; // 2


var add2 = a => b => a + b;
add2.name;   // "add"
add2.length; // 1

var add3 = (argOne, argTwo) => argOne + argTwo;
add3.length; // 2

// match everything before the last "=>"
var add4 = argOne => argTwo => argOne + argTwo;
add4.length; // 1













