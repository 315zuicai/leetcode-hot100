/**
 * 72. 编辑距离 (Edit Distance)
 * 
 * 给定两个单词 `word1` 和 `word2`，计算将 `word1` 转换为 `word2` 所需的最少操作数。
 * 你可以对一个单词执行以下三种操作之一：
 * 1. 插入一个字符
 * 2. 删除一个字符
 * 3. 替换一个字符
 * 
 * **示例 1：**
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (替换 'h' -> 'r')
 * rorse -> rose  (删除 'r')
 * rose -> ros    (删除 'e')
 * 
 * **示例 2：**
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention  -> enention (替换 'i' -> 'e')
 * enention  -> exention (替换 'n' -> 'x')
 * exention  -> exection (替换 'n' -> 'c')
 * exection  -> execution (插入 'u')
 * 
 * **提示：**
 * 1. `0 <= word1.length, word2.length <= 500`
 * 2. `word1` 和 `word2` 仅由小写英文字母组成。
 */

// 定义 dp[i][j] 代表将 word1[0:i] 转换为 word2[0:j] 需要的最少操作数。
// 状态转移方程
// dp[i][0] = i（word1 变为空需要删除 i 次）
// dp[0][j] = j（空变 word2 需要插入 j 次）
// 若 word1[i-1] === word2[j-1]，则 dp[i][j] = dp[i-1][j-1]
// 若 word1[i-1] !== word2[j-1]，则 dp[i][j] = min(插入, 删除, 替换) + 1：
// 插入：dp[i][j-1] + 1
// 删除：dp[i-1][j] + 1
// 替换：dp[i-1][j-1] + 1

function minDistance(word1: string, word2: string): number {
    const m = word1.length, n = word2.length;
    
    // 创建 DP 表，大小为 (m+1) x (n+1)，填充默认值 0
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 初始化第一列：将 word1 的前 i 个字符转换为空需要删除 i 次
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    
    // 初始化第一行：将空转换为 word2 的前 j 个字符需要插入 j 次
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // 计算 DP 表
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                // 若当前字符相等，不需要额外操作，继承前一个状态
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 若当前字符不同，计算最小操作次数
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,    // 删除 word1[i-1]
                    dp[i][j - 1] + 1,    // 插入 word2[j-1]
                    dp[i - 1][j - 1] + 1 // 替换 word1[i-1] -> word2[j-1]
                );
            }
        }
    }

    // 返回最终结果，即将 word1[0:m] 转换为 word2[0:n] 需要的最少操作数
    return dp[m][n];
}