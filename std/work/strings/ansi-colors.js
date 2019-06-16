// ansi in node
// escape: \x1b or \033 and not: \e[ as it is in bash

console.log('\x1b[36m', 'sometext', '\x1b[0m');
console.log("\033[31m this will be red \033[91m and this will be normal");

console.log("%s", "out")

// overloaded console methods:
var colors = {
    Reset: "\x1b[0m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m"
};

var infoLog = console.info;
var logLog = console.log;
var errorLog = console.error;
var warnLog = console.warn;

console.info = function (args) {
    var copyArgs = Array.prototype.slice.call(arguments);
    copyArgs.unshift(colors.Green);
    copyArgs.push(colors.Reset);
    infoLog.apply(null, copyArgs);
};

console.warn = function (args) {
    var copyArgs = Array.prototype.slice.call(arguments);
    copyArgs.unshift(colors.Yellow);
    copyArgs.push(colors.Reset);
    warnLog.apply(null, copyArgs);
};
console.error = function (args) {
    var copyArgs = Array.prototype.slice.call(arguments);
    copyArgs.unshift(colors.Red);
    copyArgs.push(colors.Reset);
    errorLog.apply(null, copyArgs);
};

// examples
console.info("Numeros", 1, 2, 3);
console.warn("pares", 2, 4, 6);
console.error("reiniciandooo");

/*
Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
*/