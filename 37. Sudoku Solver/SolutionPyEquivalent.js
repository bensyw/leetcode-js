/**
 * @description A solution that is equivalent to the Python DFS solution
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let rowSet = Array.from({
        length: 9
    }, element => new Set())
    let colSet = Array.from({
        length: 9
    }, element => new Set())
    let boxSet = Array.from({
        length: 9
    }, element => new Set())
    let toVisit = [];
    // Find all empty slot to visit
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // Find all '.' to fill
            const char = board[row][col]
            if (char === '.') {
                toVisit.push([row, col])
            } else {
                rowSet[row].add(char)
                colSet[col].add(char)
                boxSet[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(char)
            }
        }
    }

    const dfs = () => {
        if (!toVisit.length) {
            return true
        }
        // Find the next slot to visit
        const [row, col] = toVisit.shift()
        // Try number from 1 to 9
        for (let num = 1; num <= 9; num++) {
            const char = num.toString()
            // Validate soduku
            if (!(rowSet[row].has(char)) &&
                !(colSet[col].has(char)) &&
                !(boxSet[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(char))) {
                // Add new char to the sets
                // Add new char to the board
                board[row][col] = char
                rowSet[row].add(char)
                colSet[col].add(char)
                boxSet[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(char)
                if (dfs()) {
                    return true
                }
                // Clear new char from the sets
                // Clear new char from the board
                rowSet[row].delete(char)
                colSet[col].delete(char)
                boxSet[Math.floor(row / 3) * 3 + Math.floor(col / 3)].delete(char)
                board[row][col] = '.'
            }
        }
        // Add the slot back and return false
        toVisit.unshift([row, col])
        return false
    }
    dfs();
    return
};