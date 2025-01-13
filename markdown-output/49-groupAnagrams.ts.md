# 49-groupAnagrams.ts

```typescript
/**
 * 49. 字母异位词分组
 * 
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 
 * 示例 1:
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 示例 2:
 * 输入: strs = [""]
 * 输出: [[""]]
 * 
 * 示例 3:
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 * 
 * 提示：
 * - 1 <= strs.length <= 104
 * - 0 <= strs[i].length <= 100
 * - strs[i] 仅包含小写字母
 */

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 0) return [];

    const stringMap: Record<string, string[]> = {};

    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = count.join('#');
        if (!stringMap[key]) {
            stringMap[key] = [];
        }
        stringMap[key].push(str);
    }
    return Object.values(stringMap);
}

// function groupAnagrams(strs: string[]): string[][] {
//     const map: { [key: string]: string[] } = {};
//     for (const str of strs) {
//         const key = str.split('').sort().join('');
//         if (!map[key]) {
//             map[key] = [];
//         }
//         map[key].push(str);
//     }
//     return Object.values(map);
// }


// function groupAnagrams(strs: string[]): string[][] {
//     const map = _.groupBy(strs, (str: string) => str.split('').sort().join(''));
//     return Object.values(map);
// }

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
```
