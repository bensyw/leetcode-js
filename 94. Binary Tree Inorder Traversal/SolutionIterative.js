/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const result = []
    const stack = []
    while (root || stack.length) {
        if (root) {
            // Traverse to the deepest left
            stack.push(root)
            root = root.left
        } else {
            // Whenever you cannot travel to the left,
            // append the left and travel to the right.
            tempNode = stack.pop()
            result.push(tempNode.val)
            root = tempNode.right
        }
    }
    return result
};