/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    const result = []
    const queue = [root]
    while (queue.length) {
        const node = queue.shift()
        if (node === null) {
            result.push("#")
            continue
        }
        result.push(node.val.toString())
        queue.push(node.left)
        queue.push(node.right)
    }
    return result.join(' ')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data === "" || data === "#") return null;
    const tokens = data.split(' ')
    // Construct the tree from the root
    const root = new TreeNode(parseInt(tokens[0]))
    const queue = [root]
    for (let i = 1; i < tokens.length; i++) {
        const node = queue.shift()
        // Check the next two nodes
        if (tokens[i] !== '#') {
            const leftChild = new TreeNode(parseInt(tokens[i]))
            node.left = leftChild
            queue.push(leftChild)
        }
        if (tokens[++i] !== '#') {
            const rightChild = new TreeNode(parseInt(tokens[i]))
            node.right = rightChild
            queue.push(rightChild)
        }
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */