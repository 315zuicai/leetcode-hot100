/**
 * 139. 单词拆分 (Word Break)
 * 
 * 给定一个字符串 `s` 和一个字典 `wordDict`，该字典包含一些不重复的单词。你需要判断是否可以将字符串 `s` 拆分为一个或多个字典中的单词。
 * 
 * 说明：
 * - 拆分时可以不连续的将 `s` 分为多个子字符串，并且每个子字符串都必须在字典中出现。
 * - 你可以假设字典中的单词是小写字母。
 * 
 * **示例 1：**
 * 输入：s = "leetcode", wordDict = ["leet", "code"]
 * 输出：true
 * 解释：返回 true 因为 "leetcode" 可以被拆分为 "leet" 和 "code"。
 * 
 * **示例 2：**
 * 输入：s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出：true
 * 解释：返回 true 因为 "applepenapple" 可以被拆分为 "apple"、"pen" 和 "apple"。
 * 注意，"apple" 在字典中出现了两次，但这没有影响，因为单词可以重复使用。
 * 
 * **示例 3：**
 * 输入：s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出：false
 * 
 * **提示：**
 * 1. `1 <= s.length <= 300`
 * 2. `1 <= wordDict.length <= 1000`
 * 3. `1 <= wordDict[i].length <= 20`
 * 4. `s` 和 `wordDict[i]` 仅有小写字母组成
 */

function wordBreak(s: string, wordDict: string[]): boolean {
    // 转换 wordDict 为一个 set 来加快查找速度
    const wordSet = new Set(wordDict);

    // dp[i] 表示字符串 s[0...i-1] 是否可以被拆分
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // 空字符串可以拆分
    
    // 遍历每个位置
    for (let i = 1; i <= s.length; i++) {
        // 遍历每个子串的结束位置
        for (let j = 0; j < i; j++) {
            // 如果 s[0...j-1] 能拆分，且 s[j...i-1] 在字典中
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // 找到一个有效的拆分，提前退出
            }
        }
    }

    // 最终返回 dp[s.length]，表示整个字符串是否能拆分
    return dp[s.length];
}
