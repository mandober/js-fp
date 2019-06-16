// Testing misc shit

// closure example
var numeral = (function () {
    var dnames =["one", "two","three", "four"];
    return (n) => dnames[n];
})();

console.log(numeral(3));
