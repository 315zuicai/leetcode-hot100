/**
 * 131. 分割回文串 (Palindrome Partitioning)
 * 给你一个字符串 `s`，请你将其分割成一些子串，使每个子串都是回文串。
 * 返回所有可能的分割方案。
 * 
 * 回文串是正着读和反着读都相同的字符串。
 * 
 * 示例 1：
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 解释：共有两种分割方式：
 * 1. 将 "aab" 分割成 ["a","a","b"]，每个子串都是回文。
 * 2. 将 "aab" 分割成 ["aa","b"]，每个子串都是回文。
 * 
 * 示例 2：
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 提示：
 * 1. `1 <= s.length <= 16`
 * 2. `s` 仅由小写英文字母组成。
 */

function partition(s: string): string[][] {
    const res: string[][] = [];
    const path: string[] = [];

    function isPalindrome(str: string, left: number, right: number) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start: number) {
        if (start === s.length) {
            res.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1);
                path.pop();
            }
            
        }
    }
    backtrack(0);
    return res;
};
