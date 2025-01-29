/**
 * 35. 搜索插入位置 (Search Insert Position)
 * 给定一个排序数组 `nums` 和一个目标值 `target`，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它按顺序插入的位置。
 * 
 * 请必须使用 O(log n) 的时间复杂度实现。
 * 
 * 示例 1：
 * 输入：nums = [1,3,5,6], target = 5
 * 输出：2
 * 
 * 示例 2：
 * 输入：nums = [1,3,5,6], target = 2
 * 输出：1
 * 
 * 示例 3：
 * 输入：nums = [1,3,5,6], target = 7
 * 输出：4
 * 
 * 示例 4：
 * 输入：nums = [1,3,5,6], target = 0
 * 输出：0
 * 
 * 示例 5：
 * 输入：nums = [1], target = 0
 * 输出：0
 * 
 * 提示：
 * 1. `1 <= nums.length <= 10^4`
 * 2. `-10^4 <= nums[i], target <= 10^4`
 * 3. `nums` 为无重复元素的升序排列数组。
 */

function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1; 

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
