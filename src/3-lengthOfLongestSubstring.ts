/**
 * 3. 无重复字符的最长子串
 * 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 示例 2:
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 示例 3:
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 提示：
 * - 0 <= s.length <= 5 * 104
 * - s 由英文字母、数字、符号和空格组成
 */
function lengthOfLongestSubstring(s: string): number {
    let strMap = new Map();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        const cur = s[right];
        if (strMap.has(cur) && left <= strMap.get(cur)) {
            left = strMap.get(cur) + 1;
        }
        strMap.set(cur, right);
        maxLen = Math.max(right - left + 1, maxLen);
    }
    return maxLen;
}
const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";
const s3 = "asjrgapa";
console.log(lengthOfLongestSubstring(s) === 3);
console.log(lengthOfLongestSubstring(s1) === 1);
console.log(lengthOfLongestSubstring(s2) === 3);
console.log(lengthOfLongestSubstring(s3) === 6);
