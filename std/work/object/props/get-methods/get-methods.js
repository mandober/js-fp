
function getMethods(obj) {
    Reflect.ownKeys(obj).filter(key => typeof (obj[key]) === 'function');
}
