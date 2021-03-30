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
    /**
     * DFS with pre-order traversal
     *
     * @param {TreeNode} node
     * @return {string}
     */
    const dfs = (node) => {
        if (node === null) {
            return '#'
        }
        return [node.val.toString(), dfs(node.left), dfs(node.right)].join(' ')
    }
    return dfs(root)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    /**
     * DFS with pre-order traversal
     *
     * @param {string[]} tokens
     * @return {TreeNode}
     */
    const reverseDFS = (tokens) => {
        const token = tokens.shift()
        if (token === '#') {
            return null
        }
        const node = new TreeNode(parseInt(token))
        node.left = reverseDFS(tokens)
        node.right = reverseDFS(tokens)
        return node
    }
    const tokens = data.split(' ')
    return reverseDFS(tokens)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */