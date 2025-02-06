/**
 * 45. 跳跃游戏 II (Jump Game II)
 * 
 * 给定一个 **非负整数数组** `nums`，其中 `nums[i]` 表示从索引 `i` 处可以跳跃的 **最大步数**。
 * 
 * 你的目标是使用 **最少的跳跃次数** 到达数组的 **最后一个索引**，请返回达到最后一个索引的 **最少跳跃次数**。
 * 
 * **示例 1：**
 * 输入：nums = [2,3,1,1,4]
 * 输出：2
 * 解释：从索引 0 跳到索引 1（跳 1 步），然后跳到索引 4（跳 1 步），共 2 次跳跃。
 * 
 * **示例 2：**
 * 输入：nums = [2,3,0,1,4]
 * 输出：2
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 10^4`
 * 2. `0 <= nums[i] <= 1000`
 * 3. 题目保证可以到达最后一个索引
 */
function jump(nums: number[]): number {
    let jumps = 0;    // 记录跳跃次数
    let curEnd = 0;   // 当前跳跃的边界
    let maxReach = 0; // 当前位置能跳到的最远范围

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]); // 更新最远可达范围

        if (i === curEnd) { // 需要跳跃
            jumps++;
            curEnd = maxReach; // 更新跳跃边界
        }
    }

    return jumps;
}
