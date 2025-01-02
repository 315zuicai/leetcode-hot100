/**
 * LeetCode 41. 缺失的第一个正数
 * 
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 * 
 * 示例 1：
 * 输入：nums = [1,2,0]
 * 输出：3
 * 解释：数字 1 和 2 都出现了，所以最小的缺失正数是 3
 * 
 * 示例 2：
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 解释：数字 1、3 和 4 都出现了，所以最小的缺失正数是 2
 * 
 * 示例 3：
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 解释：最小的正数 1 没有出现，所以返回 1
 * 
 * 提示：
 * 1 <= nums.length <= 5 * 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 */
// function firstMissingPositive(nums: number[]): number {
//     let res = 1;
//     nums.sort((a, b) => a - b);
//     for (let item of nums) {
//         if (res === item) {
//             res++;
//         }
//     }
//     return res;
// };

function firstMissingPositive(nums: number[]): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            nums[i] = len + 1;
        }
    }

    for (let i = 0; i < len; i++) {
        const num = Math.abs(nums[i]);
        if (num <= len) {
            nums[num - 1] = -Math.abs(nums[num - 1])
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return len + 1;
};

const nums = [3, 4, -1, 1];
console.log(firstMissingPositive(nums));
