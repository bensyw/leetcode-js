/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    // Create degree array
    const inDegrees = Array(numCourses).fill(0)
    // Create an adjacency list
    const graph = new Map()
    for (const [u, v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(u)
        } else {
            graph.set(v, [u])
        }
        inDegrees[u]++
    }
    // Create an queue filled with zero indegree nodes
    // Use empty array and for loop instead of indexOf to avoid undefined
    const queue = []
    for (let i = 0; i < inDegrees.length; i++) {
        if (inDegrees[i] === 0) queue.push(i)
    }
    // Topological sort
    const result = []
    while (queue.length) {
        const node = queue.shift()
        // In JavaScript for...of... doesn't handle undefined
        // We have to check whether the map has the key before using for...of...
        if (graph.has(node)) {
            for (const neighbour of graph.get(node)) {
                inDegrees[neighbour]--
                if (inDegrees[neighbour] === 0) queue.push(neighbour)
            }
        }
        result.push(node)
    }
    return result.length === numCourses ? result : []
};