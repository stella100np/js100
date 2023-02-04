/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let seen = new Map();
  let max_len = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    // 使用has
    if (seen.has(s[end])) {
        // start 变为 hash表中重复字符的后一个
      start = Math.max(start, seen.get(s[end]) + 1);
    }
    // 更新字符最后出现的位置
    seen.set(s[end], end);
    max_len = Math.max(max_len, end - start + 1);
  }
  return max_len;
};

console.log(lengthOfLongestSubstring("abba"));
