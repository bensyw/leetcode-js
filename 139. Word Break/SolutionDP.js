/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // Initialize DP array
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    // Write the DP array
    // Meaning of the DP entry: substring up to that index
    for (let end = 1; end <= s.length; end++) {
        for (let start = 0; start < end; start++) {
            // If substring(0, start-1) can be segmented
            // and the substring(start, end) is a word in the dictionary
            if (dp[start] && wordDict.includes(s.substring(start, end))) {
                dp[end] = true
                // Early termination
                break
            }
        }
    }
    return dp[s.length]
};