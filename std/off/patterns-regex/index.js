/**
 * Collection of regex patterns
 */
let re = {
    // matches: /*...*/
    multilineComments: /\/\*[\s\S]*?\*\//mg,
    
    // matches: //...
    lineComments: /\/\/.*$/mg,
    
    // matches all comments
    allComments: /\/\/.*$|\/\*[\s\S]*?\*\//mg,
    
    // matches one or more whitespace: [\r\n\t\f\v ]
    whitespace: /[\s]+/mg,
    
    // matches one or more space char (squeeze spaces)
    space: /[ ]+/mg,

};



//* ================ ALIASES ================
re.mc = re.multilineComments;
re.lc = re.lineComments;
re.ac = re.allComments;
re.ws = re.whitespace;
re.sp = re.space;



//* ================ EXPORT ================
if (typeof module !== "undefined") module.exports = re;
