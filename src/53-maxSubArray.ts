/**
 * 53. 最大子数组和
 * 
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 子数组是数组中的一个连续部分。
 * 
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 示例 2：
 * 输入：nums = [1]
 * 输出：1
 * 
 * 示例 3：
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 * 
 * 提示：
 * - 1 <= nums.length <= 105
 * - -104 <= nums[i] <= 104
 */
// function maxSubArray(nums: number[]): number {
//     let max = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = nums[i];
//         let tempMax = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             sum += nums[j];
//             tempMax = Math.max(tempMax, sum);
//         }
//         max = Math.max(tempMax, max);
//     }
//     return max;
// };

function maxSubArray(nums: number[]): number {
    let max = nums[0];
    let curSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i]);
        max = Math.max(curSum, max);
    }
    return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums) === 6);

