/**
 * 136. 只出现一次的数字 (Single Number)
 * 
 * 给定一个非空整数数组 `nums`，除了某个元素仅出现一次以外，其余每个元素均出现两次。  
 * 找出那个只出现了一次的元素，并**要求算法的时间复杂度为 O(n)，且不使用额外空间**。
 * 
 * **示例 1：**
 * 输入：nums = [2,2,1]
 * 输出：1
 * 
 * **示例 2：**
 * 输入：nums = [4,1,2,1,2]
 * 输出：4
 * 
 * **示例 3：**
 * 输入：nums = [1]
 * 输出：1
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 3 * 10^4`
 * 2. `-3 * 10^4 <= nums[i] <= 3 * 10^4`
 * 3. 除了一个元素只出现一次，其余每个元素均出现两次。
 */

function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num; // 使用异或运算消除成对出现的数字
    }
    return result;
}
