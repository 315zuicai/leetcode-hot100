/**
 * 4. 寻找两个正序数组的中位数 (Median of Two Sorted Arrays)
 * 
 * 给定两个按 **非递减顺序** 排列的数组 `nums1` 和 `nums2`，请你找出并返回这两个数组的 **中位数**。
 * 计算时间复杂度要求为 `O(log (m + n))`。
 * 
 * **示例 1：**
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并后数组为 [1,2,3]，中位数是 2。
 * 
 * **示例 2：**
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并后数组为 [1,2,3,4]，中位数是 (2 + 3) / 2 = 2.5。
 * 
 * **示例 3：**
 * 输入：nums1 = [0,0], nums2 = [0,0]
 * 输出：0.00000
 * 
 * **示例 4：**
 * 输入：nums1 = [], nums2 = [1]
 * 输出：1.00000
 * 
 * **示例 5：**
 * 输入：nums1 = [2], nums2 = []
 * 输出：2.00000
 * 
 * **提示：**
 * 1. `nums1.length == m`
 * 2. `nums2.length == n`
 * 3. `0 <= m, n <= 1000`
 * 4. `1 <= m + n <= 2000`
 * 5. `-10^6 <= nums1[i], nums2[i] <= 10^6`
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // 确保 nums1 是较短的数组，以保证二分查找的效率
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length, n = nums2.length;
    let left = 0, right = m; // 在 nums1 上进行二分查找
    
    while (left <= right) {
        // 计算 nums1 的分割位置 partitionX
        let partitionX = Math.floor((left + right) / 2);
        // 计算 nums2 的分割位置 partitionY，确保左侧元素总数等于右侧（或多 1 个）
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // 获取 nums1 左侧最大值（如果 partitionX 为 0，则取负无穷）
        let maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        // 获取 nums1 右侧最小值（如果 partitionX 为 m，则取正无穷）
        let minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

        // 获取 nums2 左侧最大值（如果 partitionY 为 0，则取负无穷）
        let maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        // 获取 nums2 右侧最小值（如果 partitionY 为 n，则取正无穷）
        let minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        // 如果左右两侧的最大值小于等于右侧的最小值，则找到正确的分割点
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // 如果总长度为偶数，中位数是左侧最大值和右侧最小值的平均值
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else { // 如果总长度为奇数，中位数是左侧的最大值
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // 说明 partitionX 过大，应该向左调整
            right = partitionX - 1;
        } else {
            // 说明 partitionX 过小，应该向右调整
            left = partitionX + 1;
        }
    }

    throw new Error("Invalid input"); // 理论上不会执行到这里
}