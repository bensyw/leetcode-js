/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    // Early termination
    if (k === 0) {
        return 0
    }
    let [start, count, product] = [0, 0, 1]
    for (let end = 0; end < nums.length; end++) {
        // Moving the sliding window end forward
        product *= nums[end]
        while (start <= end && product >= k) {
            // Move the sliding window start forward until the product is less than k
            product /= nums[start]
            start++
        }
        // Now we know the longest subarray with the current ending
        // end - start + 1 number of new subarray is created
        count += end - start + 1
    }
    return count
};