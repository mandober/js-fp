function mapWith(cb, [first, ...rest]) {
    return (first === undefined) ? [] : [fn(first), ...(mapWith(cb, rest))];
}

if (typeof module !== undefined) module.exports = mapWith;

