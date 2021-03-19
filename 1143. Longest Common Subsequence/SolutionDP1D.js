/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // Create DP Array
    let dpCurr = new Array(text2.length + 1).fill(0)
    let dpPrev = new Array(text2.length + 1).fill(0)
    // Write DP table
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            dpCurr[j] = text1[i - 1] === text2[j - 1] ? dpPrev[j - 1] + 1 : Math.max(dpCurr[j - 1], dpPrev[j])
        }
        dpPrev = [...dpCurr]
    }
    return dpCurr[text2.length]
};