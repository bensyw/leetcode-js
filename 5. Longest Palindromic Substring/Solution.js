/**
 * @description Non-DP solution: Find the longest string can be expanded from a char
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Early termination
    if (s === s.split("").reverse().join("")) {
        return s
    }
    let result = "";

    // Return the longest substring can be expanded fron the substring
    const helper = (substring, left, right) => {
        while (left >= 0 && right < substring.length && substring[left] == substring[right]) {
            left--
            right++
        }
        return substring.substring(left + 1, right)
    }

    for (let index = 0; index < s.length; index++) {
        const compare = [result, helper(s, index, index), helper(s, index, index + 1)]
        result = compare.reduce((a, b) => a.length > b.length ? a : b)
    }
    return result
};