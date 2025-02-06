/**
 * 32. 最长有效括号 (Longest Valid Parentheses)
 * 
 * 给定一个只包含 `'('` 和 `')'` 的字符串 `s`，找出最长的**有效**（格式正确且连续）括号子串的长度。
 * 
 * **示例 1：**
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * **示例 2：**
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * **示例 3：**
 * 输入：s = ""
 * 输出：0
 * 
 * **提示：**
 * 1. `0 <= s.length <= 3 * 10^4`
 * 2. `s[i]` 仅为 `'('` 或 `')'`
 */

function longestValidParentheses(s: string): number {
    let maxLength = 0;
    const stack: number[] = [-1]; // 初始化 -1 作为基准

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // 记录 '(' 的索引
        } else {
            stack.pop(); // 尝试匹配 ')'
            if (stack.length === 0) {
                stack.push(i); // 记录无效 ')' 的索引
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}
