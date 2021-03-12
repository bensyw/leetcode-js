/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Negative number is not palindrome
    if (x < 0) {
        return false
    }
    // Use string method
    return x == `${x}`.split('').reverse().join('')
};