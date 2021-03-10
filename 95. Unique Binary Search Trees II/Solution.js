/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @description Save the TreeNode as an object
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    // Create a map for memoization
    const memo = new Map()

    // Find all possible unique BST starting with each node as the root
    const helper = (nodes) => {
        if (!nodes.length) {
            return [null]
        }

        // Use nodes.join() to generate a unique key
        if (memo.has(nodes.join())) {
            return memo.get(nodes.join())
        }

        let result = []
        nodes.forEach((value, index) => {
            const leftResults = helper(nodes.slice(0, index))
            const rightResults = helper(nodes.slice(index + 1))
            for (const left of leftResults) {
                for (const right of rightResults) {
                    const root = new TreeNode(value)
                    root.left = left
                    root.right = right
                    result.push(root)
                }
            }
        })

        memo.set(nodes.join(), result)
        return result
    }
    const nodes = Array.from({
        length: n
    }, (_, index) => index + 1)
    return nodes.length ? helper(nodes) : []
};