/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // Early termination
    if (nums === null || nums.length === 0) {
        return 0
    }
    // Initialize DP array
    const dp = new Array(nums.length).fill(1)
    let result = 1
    // Write DP array
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            // Suppose the subsequence ends with num[j]
            // The oppotunity to extend the previous increasing subsequence by one
            if (nums[i] > nums[j]) {
                // Find the longest extended subsequence so far
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        // Update result if dp[i] increases
        result = Math.max(result, dp[i])
    }
    return result
};