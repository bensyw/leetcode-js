/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Use array pop and shift to validate each character
    const arr = String(x).split('')
    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false
        }
    }
    return true
};