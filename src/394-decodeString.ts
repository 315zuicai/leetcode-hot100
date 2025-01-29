/**
 * 394. 字符串解码 (Decode String)
 * 
 * 给定一个经过编码的字符串 `s`，按照以下规则解码它：
 * - `k[encoded_string]` 表示 `encoded_string` 正确解码后 **重复 k 次**。
 * - 你可以认为 `k` 总是正整数。
 * - 输入字符串 `s` **保证是有效的**，且所有数字都在 `[1, 300]` 之间。
 * - 题目数据保证 `s` 由小写英文字母、数字和方括号 `[]` 组成。
 * - `s` 保证是一个 **有效的** 编码字符串，所有嵌套解码的括号对都是匹配的。
 * 
 * **示例 1：**
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * **示例 2：**
 * 输入：s = "3[a2[c]]"
 * 输出："accaccacc"
 * 
 * **示例 3：**
 * 输入：s = "2[abc]3[cd]ef"
 * 输出："abcabccdcdcdef"
 * 
 * **示例 4：**
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 * 
 * **提示：**
 * 1. `1 <= s.length <= 30,000`
 * 2. `s` 由小写英文字母、数字和 `[]` 组成
 * 3. `s` 保证是 **有效的** 编码字符串，所有 `[]` 成对出现
 */

function decodeString(s: string): string {
    const numStack: number[] = [];  // 用于存储倍数 k
    const strStack: string[] = [];  // 用于存储之前的字符串
    let curStr = "";  // 当前构造的字符串
    let num = 0;  // 当前的数字

    for (const char of s) {
        if (!isNaN(Number(char))) {  // 如果是数字
            num = num * 10 + Number(char);  // 计算完整的数字（考虑多位数）
        } else if (char === "[") {  // 遇到左括号，存入栈
            numStack.push(num);  // 把 k 存入
            strStack.push(curStr);  // 把当前字符串存入
            num = 0;  // 重置 num
            curStr = "";  // 重置 curStr
        } else if (char === "]") {  // 遇到右括号，解码
            const k = numStack.pop()!;  // 取出 k
            const prevStr = strStack.pop()!;  // 取出 `[` 之前的字符串
            curStr = prevStr + curStr.repeat(k);  // 组合字符串
        } else {  // 普通字符
            curStr += char;
        }
    }

    return curStr;
}
