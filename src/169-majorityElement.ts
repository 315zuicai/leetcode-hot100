/**
 * 169. 多数元素 (Majority Element)
 * 
 * 给定一个大小为 `n` 的数组 `nums`，返回其中的 **多数元素**。
 * **多数元素** 是指在数组中**出现次数超过 `n/2` 次的元素**。
 * 你可以假设数组是非空的，并且始终存在多数元素。
 * 
 * **示例 1：**
 * 输入：nums = [3,2,3]
 * 输出：3
 * 
 * **示例 2：**
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 * 
 * **进阶：**
 * - 你能设计出时间复杂度为 `O(n)`、空间复杂度为 `O(1)` 的算法吗？
 * 
 * **提示：**
 * 1. `n == nums.length`
 * 2. `1 <= n <= 5 * 10^4`
 * 3. `-10^9 <= nums[i] <= 10^9`
 */

function majorityElement(nums: number[]): number {
    let candidate = 0; // 记录可能的多数元素
    let count = 0; // 记录当前候选元素的计数

    // 遍历数组，寻找可能的多数元素
    for (const num of nums) {
        if (count === 0) {
            candidate = num; // 当计数为 0 时，选择当前元素作为候选
        }
        count += (num === candidate) ? 1 : -1; // 如果相等，计数 +1，否则 -1
    }

    return candidate; // 返回最终的候选元素，它一定是多数元素
}
