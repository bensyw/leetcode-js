/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // Create DP table using ES6 feature
    const dp = [...Array(text1.length + 1)].map(_ => Array(text2.length + 1).fill(0))
    // Write DP table
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            dp[i][j] = text1[i - 1] === text2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i][j - 1], dp[i - 1][j])
        }
    }
    return dp[text1.length][text2.length]
};