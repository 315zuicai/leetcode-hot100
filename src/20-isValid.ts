/**
 * 20. 有效的括号 (Valid Parentheses)
 * 
 * 给定一个只包含三种括号类型 `()`、`{}` 和 `[]` 的字符串 `s`，
 * 判断该字符串是否是 **有效** 的。
 * 
 * **有效字符串需满足：**
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 * 3. 每个右括号都必须有对应的左括号。
 * 
 * **示例 1：**
 * 输入：s = "()"
 * 输出：true
 * 
 * **示例 2：**
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * **示例 3：**
 * 输入：s = "(]"
 * 输出：false
 * 
 * **示例 4：**
 * 输入：s = "([)]"
 * 输出：false
 * 
 * **示例 5：**
 * 输入：s = "{[]}"
 * 输出：true
 * 
 * **提示：**
 * 1. `1 <= s.length <= 10^4`
 * 2. `s` 仅包含 `'()'`、`'{}'` 和 `'[]'` 这三种括号字符。
 */

function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in map) {
            // 检查栈顶元素是否匹配
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // 如果是左括号，入栈
            stack.push(char);
        }
    }

    return stack.length === 0; // 栈为空表示括号匹配成功
}
