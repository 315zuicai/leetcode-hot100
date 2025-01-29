/**
 * 153. 寻找旋转排序数组中的最小值 (Find Minimum in Rotated Sorted Array)
 * 已知一个按照升序排列的长度为 `n` 的数组 `nums`，在某个未知的下标 `k`（`0 <= k < n`）处进行了一次旋转，
 * 使得数组变为 `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`。
 * 
 * 例如，原数组 `[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]`。
 * 
 * 请你找出该数组中的最小元素。假设数组 **不存在重复元素**。
 * 
 * **示例 1：**
 * 输入：nums = [3,4,5,1,2]
 * 输出：1
 * 
 * **示例 2：**
 * 输入：nums = [4,5,6,7,0,1,2]
 * 输出：0
 * 
 * **示例 3：**
 * 输入：nums = [11,13,15,17]
 * 输出：11
 * 
 * **提示：**
 * 1. `n == nums.length`
 * 2. `1 <= n <= 5000`
 * 3. `-5000 <= nums[i] <= 5000`
 * 4. `nums` 中的所有整数 **互不相同**
 * 5. `nums` 原本是一个严格递增数组，在某个点进行了旋转
 */

function findMin(nums: number[]): number {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;  // 最小值在右侧
        } else {
            right = mid; // 可能 mid 就是最小值，不能跳过
        }
    }
    return nums[left];
}