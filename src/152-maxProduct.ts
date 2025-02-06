/**
 * 152. 乘积最大子数组 (Maximum Product Subarray)
 * 
 * 给定一个整数数组 `nums`，找到一个具有最大乘积的连续子数组（子数组中至少包含一个数字）。
 * 
 * **示例 1：**
 * 输入：nums = [2,3,-2,4]
 * 输出：6
 * 解释：子数组 [2,3] 的乘积最大，为 6。
 * 
 * **示例 2：**
 * 输入：nums = [-2,0,-1]
 * 输出：0
 * 解释：子数组 [-2] 的乘积为 0，子数组 [-2, 0] 或 [-2, 0, -1] 的乘积也是 0。
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 2 * 10^4`
 * 2. `-10 <= nums[i] <= 10`
 * 3. 题目数据保证答案是一个 32 位整数。
 */

function maxProduct(nums: number[]): number {
    // 初始化最大和最小乘积
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // 如果当前元素为负数，交换最大乘积和最小乘积
        if (nums[i] < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        // 更新最大和最小乘积
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        // 更新结果
        result = Math.max(result, maxProd);
    }

    return result;
}
