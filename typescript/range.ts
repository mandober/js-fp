// range (num, char)

function range(size: number, startAt: number = 0): ReadonlyArray<number> {
    return [...Array(size).keys()].map(i => i + startAt);
}

// function characterRange(startChar:string, endChar:string):ReadonlyArray<string> {
//     return String.fromCharCode(...range(endChar.charCodeAt(0) -
//             startChar.charCodeAt(0), startChar.charCodeAt(0)))
// }
