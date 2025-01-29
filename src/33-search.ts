/**
 * 33. 搜索旋转排序数组 (Search in Rotated Sorted Array)
 * 整数数组 `nums` 按升序排列，但其中可能会在某个点发生旋转（例如，`[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]`）。
 * 
 * 给定一个整数数组 `nums` 和一个目标值 `target`，如果 `target` 在数组中，返回它的索引；否则返回 `-1`。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 示例 1：
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 * 
 * 示例 2：
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 * 
 * 示例 3：
 * 输入：nums = [1], target = 0
 * 输出：-1
 * 
 * 提示：
 * 1. `1 <= nums.length <= 5000`
 * 2. `-10^4 <= nums[i] <= 10^4`
 * 3. `nums` 中的所有值 **互不相同**
 * 4. `nums` 是升序排列的数组，在某个点进行了旋转
 * 5. `-10^4 <= target <= 10^4`
 */
function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // 判断哪一部分是有序的
        if (nums[left] <= nums[mid]) { // 左半部分有序
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // 在左半部分
            } else {
                left = mid + 1; // 在右半部分
            }
        } else { // 右半部分有序
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // 在右半部分
            } else {
                right = mid - 1; // 在左半部分
            }
        }
    }
    
    return -1; // 未找到
}
