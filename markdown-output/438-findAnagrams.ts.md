# 438-findAnagrams.ts

```typescript
/**
 * 438. 找到字符串中所有字母异位词
 * 
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 示例 1:
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 示例 2:
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 提示:
 * - 1 <= s.length, p.length <= 3 * 104
 * - s 和 p 仅包含小写字母
 */
function findAnagrams(s: string, p: string): number[] {
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    const res = [];
    for (let item of p) {
        pCount[item.charCodeAt(0) - aCode]++;
    }
    const pLen = p.length;
    for (let i = 0; i < s.length; i++) {
        sCount[s[i].charCodeAt(0) - aCode]++;
        if (i >= pLen) {
            sCount[s.charCodeAt(i - pLen) - aCode]--;
        }
        if (sCount.toString() === pCount.toString()) {
            res.push(i - pLen + 1);
        }
    }
    return res;
};
```
