/**
 * 763. 划分字母区间 (Partition Labels)
 * 
 * 给你一个字符串 `s`，请将其划分为尽可能多的片段，使得每个字母最多出现在 **一个片段** 中。
 * 
 * 返回一个 **整数数组**，表示每个片段的长度。
 * 
 * **示例 1：**
 * 输入：s = "ababcbacadefegdehijhklij"
 * 输出：[9,7,8]
 * 解释：
 * - 第一个片段 "ababcbaca" (长度 9)，所有的 'a'、'b' 和 'c' 仅出现在该片段。
 * - 第二个片段 "defegde" (长度 7)，所有的 'd'、'e' 和 'f' 仅出现在该片段。
 * - 第三个片段 "hijhklij" (长度 8)，所有的 'h'、'i'、'j'、'k' 和 'l' 仅出现在该片段。
 *  
 * **示例 2：**
 * 输入：s = "eccbbbbdec"
 * 输出：[10]
 * 
 * **提示：**
 * 1. `1 <= s.length <= 500`
 * 2. `s` 仅由小写英文字母组成
 */
function partitionLabels(s: string): number[] {
    const lastIndex: Map<string, number> = new Map();
    
    // 1. 记录每个字符的最后出现位置
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], i);
    }

    const result: number[] = []; // 存储每个片段的长度
    let start = 0; // 片段起始位置
    let end = 0;   // 片段的最大边界

    // 2. 遍历字符串，划分区间
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex.get(s[i])!);
        
        if (i === end) {  // 找到一个完整片段
            result.push(end - start + 1);
            start = i + 1; // 更新下一个片段的起始位置
        }
    }

    return result;
}

// 测试
console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // [10]
