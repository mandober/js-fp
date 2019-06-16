function hashCode(str) {
    var char, t, hash = 0;
    if (str.length == 0) return hash;
    for (var i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        //console.log('char: ', char);
        t = hash << 5;
        console.log('t: ', t);
        hash = t - hash + char;
        console.log('hash: ', hash);
        hash = hash & hash; // Convert to 32bit integer
        //hash = hash.toString(36).substr(0, 9);
    }
    return hash;
}

console.log('hashCode(big): ', hashCode("big"));