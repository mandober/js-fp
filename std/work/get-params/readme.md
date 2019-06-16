# getParams()
This function will try and extract parameter names from various shapes of functions.
It can be used for simpler scenarios when complex destructuring patterns are not involved.

The main regular expression that extracts formal parameters from a function was from Kayle Simpson's [Functional-Lite Javascript](https://github.com/getify/Functional-Light-JS/blob/master/ch3.md)



## Description
Get function's declared parameter names.

## Synopsis
getParams(fn)

Parameters:
- a function

Return value:
- an array of strings containing names of input's function parameters.

## Examples

