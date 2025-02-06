/**
 * 347. 前 K 个高频元素 (Top K Frequent Elements)
 * 
 * 给定一个整数数组 `nums` 和一个整数 `k`，请返回其中出现频率 **前 k 高** 的元素。
 * 你可以按 **任意顺序** 返回答案。
 * 
 * **示例 1：**
 * 输入：nums = [1,1,1,2,2,3], k = 2
 * 输出：[1,2]
 * 
 * **示例 2：**
 * 输入：nums = [1], k = 1
 * 输出：[1]
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 10^5`
 * 2. `-10^4 <= nums[i] <= 10^4`
 * 3. `1 <= k <= 数组中不同元素的个数`
 * 4. 题目数据保证答案 **唯一**，换句话说，数组中前 `k` 个高频元素的集合是唯一的。
 * 
 * **进阶：**
 * - 你的算法 **必须** 在 `O(n log n)` 的时间复杂度内完成。
 * - 能否设计一个时间复杂度优于 `O(n log n)` 的算法？
 */

function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    // 1. 统计频率
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // 2. 桶排序（bucket[i] 存储出现 i 次的元素）
    const bucket: number[][] = Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }

    // 3. 取出前 K 个高频元素
    const result: number[] = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
}
