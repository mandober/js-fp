function copyProperty(src, dest = {}, prop) {
    if (prop) {
        // copy one
        let pd = Object.getOwnPropertyDescriptor(src, prop);
        Object.defineProperty(dest, prop, pd);
    } else {
        // copy all
        let pds = Object.getOwnPropertyDescriptors(src);
        Object.defineProperties(dest, pds)
    }
    return dest;
}
