/**
 * Definition for a Node.
 */

function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    // If the graph is empty
    if (node === null) {
        return null;
    }
    // key: node, value: the copy of the node
    const visited = new Map();
    const clone = root => {
        // If the node hasn't been visited before
        if (!visited.has(root)) {
            // Add node and the copy of the node to the visited map
            visited.set(root, new Node(root.val));
            // The neighbours of the copy of the node = the copy of the neighbours of the original node
            visited.get(root).neighbors = root.neighbors.map(clone);
        }
        return visited.get(root);
    }
    return clone(node);
};