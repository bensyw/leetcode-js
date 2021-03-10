/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    // Initialize DP array
    let G = Array(n + 1).fill(0)
    // Base case
    G[0] = G[1] = 1
    // Write the DP array
    for (i = 2; i < n + 1; i++) {
        for (j = 1; j < i + 1; j++) {
            G[i] += G[j - 1] * G[i - j]
        }
    }
    return G[n]
};