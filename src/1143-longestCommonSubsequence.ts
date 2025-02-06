/**
 * 1143. 最长公共子序列 (Longest Common Subsequence)
 * 
 * 给定两个字符串 `text1` 和 `text2`，返回它们的 **最长公共子序列** 的长度。
 * 
 * **子序列** 是指可以通过删除一些字符（可以不删除）而不改变剩余字符相对顺序得到的新字符串。
 * 
 * **最长公共子序列** 是指在两个字符串中都出现的，并且长度最长的子序列。
 * 
 * **示例 1：**
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace"，长度为 3。
 * 
 * **示例 2：**
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释：最长公共子序列是 "abc"，长度为 3。
 * 
 * **示例 3：**
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释：两个字符串没有公共子序列，返回 0。
 * 
 * **提示：**
 * 1. `1 <= text1.length, text2.length <= 1000`
 * 2. `text1` 和 `text2` 仅由小写英文字母组成。
 */

function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;

    // 创建一个二维数组 dp，初始化大小为 (m+1) x (n+1)，所有值设为 0
    // dp[i][j] 表示 text1[0:i] 和 text2[0:j] 的最长公共子序列长度
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 遍历 text1 和 text2 的所有字符
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // 如果当前字符相等，则 LCS 长度加 1（继承自 dp[i-1][j-1]）
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // 如果当前字符不相等，则取前一个状态的最大值
                // 要么忽略 text1[i-1]，要么忽略 text2[j-1]
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // dp[m][n] 存储的是 text1 和 text2 的最长公共子序列长度
    return dp[m][n];
}
