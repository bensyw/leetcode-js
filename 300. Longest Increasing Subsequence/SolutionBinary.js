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
        while (i != j) {
            m = Math.floor((i + j) / 2)
            if (tails[m] < num) {
                i = m + 1
            } else {
                j = m
            }
        }
        tails[i] = num
        result = Math.max(result, i + 1)
    }
    return result
};