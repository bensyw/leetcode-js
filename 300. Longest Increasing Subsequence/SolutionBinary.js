/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // Initialize DP table
    const tails = new Array(nums).fill(0)
    result = 0
    for (const num of nums) {
        let [i, j] = [0, result]
        // Decide which tail to update with num
        // Scenario I: num greater than all tails -> Update the longest tail
        // Scenario II: num smaller than all tails -> Update the shortest tail
        // Scenario III: num in between -> use binary search to find which to update
        // The core logic is that, as the length increases, the tail of the longest subsequence increases
        while (i != j) {
            m = Math.floor((i + j) / 2)
            if (tails[m] < num) {
                i = m + 1
            } else {
                j = m
            }
        }
        // Update the tail with a length of i
        tails[i] = num
        result = Math.max(result, i + 1)
    }
    return result
};