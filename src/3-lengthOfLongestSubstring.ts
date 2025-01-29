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
    let strMap = new Map(); // 用于存储字符及其最近出现的索引
    let left = 0, maxLen = 0; // left 为窗口左边界，maxLen 记录最长无重复子串的长度

    for (let right = 0; right < s.length; right++) { // 遍历字符串，right 为窗口右边界
        const cur = s[right]; // 当前字符

        // 如果当前字符已存在于 strMap 且索引在 left 右侧（仍在窗口内）
        if (strMap.has(cur) && left <= strMap.get(cur)) {
            // 更新左指针，跳过重复字符，使其不在当前子串范围内
            left = strMap.get(cur) + 1;
        }

        // 记录当前字符最新出现的位置
        strMap.set(cur, right);

        // 更新最大子串长度
        maxLen = Math.max(right - left + 1, maxLen);
    }

    return maxLen; // 返回最长无重复子串的长度
}

const s = "abcabcbb";
const s1 = "bbbbb";
const s2 = "pwwkew";
const s3 = "asjrgapa";
console.log(lengthOfLongestSubstring(s) === 3);
console.log(lengthOfLongestSubstring(s1) === 1);
console.log(lengthOfLongestSubstring(s2) === 3);
console.log(lengthOfLongestSubstring(s3) === 6);
