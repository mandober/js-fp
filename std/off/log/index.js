/*
%o or %O
Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.

%d or %i
Outputs an integer. Number formatting is supported, for example
console.log("Foo %.2d", 1.1) will output the number as two significant figures with a leading 0: Foo 01

%s
Outputs a string.

%f
Outputs a floating-point value. Formatting is supported, for example
console.log("Foo %.2f", 1.1) will output the number to 2 decimal places: Foo 1.10

%c
Browser only: You can use the "%c" directive to apply a CSS style to console output:
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue; padding: 2px");
The text before the directive will not be affected, but the text after the directive will be styled
using the CSS declarations in the parameter. Note: Quite a few CSS properties are supported by this
styling; you should experiment and see which ones provide useful.
*/

const log = function(msg="message", level=4) {

    // 0=success, 1=error, 2=warn, 3=debug, 4=info
    let sign, colour = "cornflowerblue";

    switch (level) {
        case 0:
        case "ok":
        case "success":
            colour = "green";
            sign = "✔ ";
            break;

        case 1:
        case "err":
        case "error":
            colour = "darkred";
            sign = "✗ ";
            break;

        case 2:
        case "warn":
            colour = "orange";
            break;

        case 3:
        case "debug":
        case "dbg":
            colour = "magenta";
            break;

        default:
            colour = "cornflowerblue";

    }

    let frmt = `color: ${colour}; font-weight: bold; padding: 2px`;

    if (typeof msg === "object") console.log(`%c%o`, frmt, msg);
    console.log(`${sign}%c%s`, frmt, msg);

    return level;
}


//* ================ EXPORT =================
if (typeof module !== "undefined") module.exports = log;
