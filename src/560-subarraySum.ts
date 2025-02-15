/**
 * 560. 和为 K 的子数组
 * 
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
 * 
 * 示例 1：
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 * 
 * 示例 2：
 * 输入：nums = [1,2,3], k = 3
 * 输出：2
 * 
 * 提示：
 * - 1 <= nums.length <= 2 * 104
 * - -1000 <= nums[i] <= 1000
 * - -107 <= k <= 107
 */

function subarraySum(nums: number[], k: number): number {
    const prefixSumMap: Map<number, number> = new Map();
    prefixSumMap.set(0, 1);
    let res = 0, tempSum = 0;
    for (let item of nums) {
        tempSum += item;
        const target = tempSum - k;
        if (prefixSumMap.has(target)) {
            res += prefixSumMap.get(target)!;
        }
        prefixSumMap.set(tempSum, (prefixSumMap.get(tempSum) || 0) + 1);
    }
    return res;
};