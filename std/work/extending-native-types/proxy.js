var target = ["a", "b", "c"];

var handler = {
    get(target, prop) {
        // console.log(target);
        console.log(prop);
        // console.log(target[prop]);
        //var indices = Array.from(target.keys());
        //return (k.includes(prop)) ? "get: yes" : "get: no";
        return (prop in Array.from(target.keys())) ? prop : "get: no";
    },

    has(target, prop) {
        console.log(prop);
        return (prop in Array.from(target.keys()))
        ? "has: yes" : "has: no";
    },

    set(target, prop, value) {
        console.log(prop);
        console.log(value);
        return (prop in Array.from(target.keys()))
        ? "set: yes" : "set: no";
    }
};

var p = new Proxy(target, handler);

p[0]; /*?*/
p[5]; /*?*/
p["a"]; /*?*/
p.a; /*?*/
p["z"]; /*?*/
p.z; /*?*/

"a" in p; /*?*/
0 in p; /*?*/


p[0] = 22; /*?*/
p[5] = 88; /*?*/
p.a = 33; /*?*/
p["z"] = 44; /*?*/

p.push; /*?*/
p.length; /*?*/

p[0] = 12; /*?*/
target


// require('harmony-reflect');
function narray(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Expected an array');
    return new Proxy(arr, {
        get: function (target, name) {
            var i = +name;
            return target[i < 0 ? target.length + i : i];
        },
        set: function (target, name, val) {
            var i = +name;
            return target[i < 0 ? target.length + i : i] = val;
        }
    });
};

