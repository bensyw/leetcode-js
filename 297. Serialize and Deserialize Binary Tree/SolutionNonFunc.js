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
    /**
     * Impure functional solution
     *
     * @param {TreeNode} node
     * @return
     */
    const dfs = (node) => {
        if (node === null) {
            result.push('#')
            return
        }
        result.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return result.join(' ')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    /**
     * Impure functional solution
     *
     * @return {TreeNode}
     */
    const reverseDFS = () => {
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
    return reverseDFS()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */