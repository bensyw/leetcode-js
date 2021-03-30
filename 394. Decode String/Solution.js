/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = []
    let currentString = ""
    let num = 0

    for (const char of s) {
        if (char === "[") {
            stack.push({
                currentString,
                num
            })
            currentString = ""
            num = 0
        } else if (char === "]") {
            let {
                currentString: lastString,
                num: lastNum
            } = stack.pop()
            currentString = lastString + currentString.repeat(lastNum)
        } else if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char)
        } else {
            currentString += char
        }
    }

    return currentString
};