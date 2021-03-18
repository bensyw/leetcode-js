/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bracketMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])
    let stack = []
    for (let char of s) {
        // Append to the stack if it's in the opening
        if (bracketMap.has(char)) {
            stack.push(char)
        } else if (stack.length && bracketMap.get(stack.slice(-1)[0]) === char) {
            stack.pop()
        } else {
            return false
        }
    }
    return !stack.length
}