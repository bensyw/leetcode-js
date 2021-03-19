/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const words = new Set(wordDict)
    const wordLengths = new Set(wordDict.map(word => word.length))
    // Starts: the substring from 0 to a certain index that can be segemented
    const starts = new Set([0])
    for (const start of starts) {
        for (const wordLength of wordLengths) {
            if (words.has(s.slice(start, start + wordLength))) {
                starts.add(start + wordLength)
            }
        }
    }
    return starts.has(s.length)
};