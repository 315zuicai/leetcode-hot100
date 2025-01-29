/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置 (Find First and Last Position of Element in Sorted Array)
 * 给你一个按照非递减顺序排列的整数数组 `nums` 和一个目标值 `target`。
 * 请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值，返回 `[-1, -1]`。
 * 
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 示例 1：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 提示：
 * 1. `0 <= nums.length <= 10^5`
 * 2. `-10^9 <= nums[i] <= 10^9`
 * 3. `nums` 是一个非递减数组。
 * 4. `-10^9 <= target <= 10^9`
 */

function searchRange(nums: number[], target: number): number[] {
    function binarySearch(nums: number[], target: number, isFirst: boolean) {
        let left = 0, right = nums.length - 1;
        let result = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;

                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    const first = binarySearch(nums, target, true);
    if (first === -1) {
        return [-1, -1];
    }
    const last = binarySearch(nums, target, false);
    return [first, last];
};
