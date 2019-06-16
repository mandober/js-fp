// rot13
// ROT13 cipher, where the values of the letters are shifted by 13 places.

// All letters will be uppercase. Do not transform any non-alphabetic
// character (i.e.spaces, punctuation), but do pass them on.

function toASCII(...str) {
    console.log(str);
}


function rot13(str) {
    var len = str.length,
        fcc = String.fromCharCode;

    str = str.split("");

    str = str.map(function(val){
        val = val.charCodeAt(0);
        // A-Z
        if (val >= 65 && val <= 90) {
            if (val + 13 <= 90) {
                return String.fromCharCode(val + 13);
            } else {
                return String.fromCharCode(val + 13 - 26);
            }
        // a-z
        } else if (val >= 97 && val <= 122) {

        } else {
            return String.fromCharCode(val);
        }
    });

    return str.join("");
}



// Change the inputs below to test
var aa = rot13("SERR PBQR PNZC");
console.log('aa: ', aa);

/*
A-Z 65-90    90 - 13 = M(77)   M -> Z    N(78) -> A(65)
a-z 97-122
String.prototype.charCodeAt()
String.fromCharCode()
*/