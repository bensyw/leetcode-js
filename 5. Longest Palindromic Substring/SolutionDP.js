/**
 * @description 2D DP solution: with ES6 features
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // Early termination
    if (s === s.split("").reverse().join("")) {
        return s
    }
    // Creating a 2-D DP table using ES6 spread and map
    const dp = [...Array(s.length + 1)].map(_ => Array(s.length + 1).fill(false))
    let result = ""
    // Base case: 1 char substring
    for (let index = 0; index < s.length; index++) {
        dp[index][index] = true
        result = s[index]
    }
    // Work from the bottom right corner
    for (let start = s.length - 1; start >= 0; start--) {
        for (let end = start + 1; end < s.length; end++) {
            if (s[start] === s[end]) {
                if (end - start === 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true
                    result = result.length < (end - start + 1) ? s.substring(start, end + 1) : result
                }
            }
        }
    }

    return result
};