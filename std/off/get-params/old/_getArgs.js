// k.simpson
function getArgs(fn) {
    return fn.toString()
        .replace(/^(?:(?:function.*\(([^]*?)\))|(?:([^\(\)]+?)\s*=>)|(?:\(([^]*?)\)\s*=>))[^]+$/, "$1$2$3")
        .split(/\s*,\s*/)
        .map(v => v.replace(/[=\s].*$/, ""));
}
