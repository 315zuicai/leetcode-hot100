/**
 * 5. 最长回文子串 (Longest Palindromic Substring)
 * 
 * 给定一个字符串 `s`，找到 `s` 中最长的回文子串。  
 * 你可以假设 `s` 的最大长度为 `1000`。
 * 
 * **示例 1：**
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 也是一个有效答案。
 * 
 * **示例 2：**
 * 输入：s = "cbbd"
 * 输出："bb"
 * 
 * **示例 3：**
 * 输入：s = "a"
 * 输出："a"
 * 
 * **示例 4：**
 * 输入：s = "ac"
 * 输出："a"
 * 
 * **提示：**
 * 1. `1 <= s.length <= 1000`
 * 2. `s` 仅由数字和英文字母组成
 */

function longestPalindrome(s: string): string {
    if (s.length < 2) return s; // 长度为 0 或 1，直接返回本身

    let start = 0, maxLen = 0; // 记录最长回文子串的起始索引和长度

    /**
     * 以 left 和 right 为中心向两边扩展，寻找最长回文
     * @param left 左指针
     * @param right 右指针
     */
    function expandAroundCenter(left: number, right: number) {
        // 当左右指针没有越界，并且字符相等时，继续扩展
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // 计算当前回文子串的长度 (right - left - 1 是因为最后一次循环导致 left 和 right 多走了一步)
        let len = right - left - 1;
        // 更新最长回文子串的起始位置和长度
        if (len > maxLen) {
            maxLen = len;
            start = left + 1; // 回文起始点需要加回 1
        }
    }

    // 遍历字符串中的每个字符，作为回文中心
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // 以单个字符为中心，处理奇数长度回文
        expandAroundCenter(i, i + 1); // 以两个字符为中心，处理偶数长度回文
    }

    // 返回最长回文子串
    return s.substring(start, start + maxLen);
}
