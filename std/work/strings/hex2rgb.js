// convert hex color to rgb color
// #1AFAB0 -> rgb(26,250,176)
// #A3F -> rgb(170,51,255)
function hex2rgb(p) {
    'use strict';

    if (!p) return 'console.log(USAGE: hex2rgb("#AAFF10"))';
    var res = 'rgb(';
    p = p + '';

    switch (p.length) {
        case 7:
            res += parseInt(p.substr(1, 2), 16) + ','; // ff -> 255
            res += parseInt(p.substr(3, 2), 16) + ',';
            res += parseInt(p.substr(5, 2), 16);
            break;

        case 4:
            res += parseInt(p.substr(1, 1).repeat(2), 16) + ','; // f -> ff -> 255
            res += parseInt(p.substr(2, 1).repeat(2), 16) + ',';
            res += parseInt(p.substr(3, 1).repeat(2), 16);
            break;

        default:
            return 'Error: value is not a hex color';
    }

    res += ')'
    return res;
}

// export { hex2rgb };

// var a = hex2rgb("#1AFAB0"); // "rgb(26,250,176)"
// console.log(a);

// var b = hex2rgb("#A3F"); // "rgb(170,51,255)"
// console.log(b);
