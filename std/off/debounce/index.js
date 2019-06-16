/**
 * debounce() - Create a function that will only execute after `wait` milliseconds
 *
 * @param    {fn}   cb  A callback to fire.
 * @param    {int}  ms  Time to spend caching executions before actually executing.
 * @returns  {fn}   Debounced function
 */
const debounce = function debounce(cb, wait) {
    let timer;

    return function () {
        if (timer) clearTimeout(timer);

        let self = this;
        let arg = arguments;

        timer = setTimeout(function () {
            cb.apply(self, arg);
        }, wait);
    };
};


var f = (a, b) => a+b;
var g = debounce(f, 2000); //?
g(3,4); //?


//var two = debouncer(f, 3000)(1, 2); //?
//console.log('two: ', two);
