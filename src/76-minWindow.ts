/**
 * 76. 最小覆盖子串
 * 
 * 给你一个字符串 s 和一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 注意：
 * - 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * - 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 示例 1：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 示例 2：
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 示例 3：
 * 输入：s = "a", t = "aa"
 * 输出：""
 * 
 * 提示：
 * - 1 <= s.length, t.length <= 105
 * - s 和 t 由英文字母组成
 */
function minWindow(s: string, t: string): string {
    const tCount = new Array(128).fill(0);
    let left = 0, right = 0, minStart = 0, minLen = Infinity;
    let required = t.length;
    for (let item of t) {
        tCount[item.charCodeAt(0)]++;
    }
    while (right < s.length) {
        let cur = s[right];
        if (tCount[cur.charCodeAt(0)] > 0) {
            required--;
        }
        tCount[cur.charCodeAt(0)]--;
        right++;

        while (required === 0) {
            if (right - left < minLen) {
                minStart = left;
                minLen = right - left;
            }
            tCount[s[left].charCodeAt(0)]++;
            if (tCount[s[left].charCodeAt(0)] > 0) {
                required++;
            }
            left++;
        }
    }
    return minLen === Infinity ? '' : s.substr(minStart, minLen);
}