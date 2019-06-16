target = [0,1,2,3,4];

handler = {
    get(target, prop) {
        //console.log(target);
        //console.log(prop);
        //var len = target.length; /*?*/
        prop = (prop < 0) ? (target.length + +prop) : prop; /*?*/
        return target[prop];
    }
};

var arr = new Proxy(target, handler);

arr[-1]; /*?*/
// arr[-2]; /*?*/
// arr[-3]; /*?*/
// arr[-4]; /*?*/
arr[-5]; /*?*/
arr[-6]; /*?*/
// arr[0]; /*?*/
// arr[1]; /*?*/
// arr[2]; /*?*/
// arr[3]; /*?*/
// arr[4]; /*?*/
// arr[5]; /*?*/
