/**
 * 31. 下一个排列 (Next Permutation)
 * 
 * 整数数组 `nums` 表示一个排列（permutation），请**原地**找到该排列的**下一个字典序排列**。
 * - 下一个排列是指比当前排列大的**最小排列**，如果不存在更大的排列，则将其变为**最小排列**（升序排列）。
 * - 必须**原地**修改 `nums`，不能使用额外数组空间。
 * 
 * **示例 1：**
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 解释：下一个排列是 [1,3,2]，因为 123 → 132。
 * 
 * **示例 2：**
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 解释：当前排列已是最大，返回最小排列 [1,2,3]。
 * 
 * **示例 3：**
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * **示例 4：**
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 100`
 * 2. `0 <= nums[i] <= 100`
 * 
 * **进阶：**
 * - 你能在 `O(n)` 时间复杂度内完成此题吗？
 */

function nextPermutation(nums: number[]): void {
    const n = nums.length;
    
    // Step 1: 从右向左找到第一个下降的元素
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Step 2: 从右向左找到比 nums[i] 大的最小元素
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        
        // Step 3: 交换 nums[i] 和 nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    // Step 4: 将 i 后面的部分反转，使其变为最小的字典序
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}
