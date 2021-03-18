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
    if (!node) return null
    let visited = new Map();
    visited.set(node, new Node(node.val))
    let queue = [node]
    while (queue.length) {
        const currentNode = queue.shift()
        for (let neighbor of currentNode.neighbors) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, new Node(neighbor.val))
                queue.push(neighbor)
            }
            visited.get(currentNode).neighbors.push(visited.get(neighbor))
        }
    }
    return visited.get(node)
};