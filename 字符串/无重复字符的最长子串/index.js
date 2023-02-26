/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = new Map();
    let result = 0
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const el = s[i];
        if (hash.has(el)) {
            start = Math.max(start, hash.get(el)+1);
        }
       hash.set(el,i)
        result = Math.max(result, i-start+1)
    }
    return result
}