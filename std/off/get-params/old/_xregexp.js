const XRegExp = require("xregexp");

// EXAMPLE 1:
// Using named capture and flag x (free-spacing and line comments)
var date = XRegExp(`(?<year>  [0-9]{4} ) -?  # year
                    (?<month> [0-9]{2} ) -?  # month
                    (?<day>   [0-9]{2} )     # day`, 'x');

// Using named backreferences...
XRegExp.exec('2016-02-23', date).year; //?
//=> '2016'

XRegExp.replace('2016-02-23', date, '${month}/${day}/${year}'); //?
//=> '02/23/2016'





// EXAMPLE 2:
// Finding matches within matches, while passing forward and returning specific backreferences
html = '<a href="http://xregexp.com/api/">XRegExp</a><a href="http://www.google.com/">Google</a>';

XRegExp.matchChain(html, [
    { regex: /<a href="([^"]+)">/i, backref: 1 },
    { regex: XRegExp('(?i)^https?://(?<domain>[^/?#]+)'), backref: 'domain' }
]);
//=> ['xregexp.com', 'www.google.com']


// Test the Unicode category L (Letter)
const unicodeWord = XRegExp('^\\pL+$');
unicodeWord.test('Đ ŃŃŃĐşĐ¸Đš'); //?
unicodeWord.test('ćĽćŹčŞ'); //?
unicodeWord.test('Ř§ŮŘšŘąŘ¨ŮŘŠ'); ///?

// Test some Unicode scripts
XRegExp('^\\p{Hiragana}+$').test('ă˛ăăăŞ'); //?
XRegExp('^[\\p{Latin}\\p{Common}]+$').test('Ăber CafĂŠ.'); //?


// Using flag A to match astral code points
XRegExp('^\\pS$').test('đŠ'); //?
XRegExp('^\\pS$', 'A').test('đŠ'); //?
XRegExp('(?A)^\\pS$').test('đŠ'); //?
// Using surrogate pair U+D83D U+DCA9 to represent U+1F4A9 (pile of poo)
XRegExp('(?A)^\\pS$').test('\uD83D\uDCA9'); //?

// Implicit flag A
XRegExp.install('astral');
XRegExp('^\\pS$').test('đŠ'); //?
