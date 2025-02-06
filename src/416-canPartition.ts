/**
 * 416. 分割等和子集 (Partition Equal Subset Sum)
 * 
 * 给定一个**只包含正整数**的整数数组 `nums`，判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * **示例 1：**
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11]，两个子集的和相等。
 * 
 * **示例 2：**
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组无法分割成两个和相等的子集。
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 200`
 * 2. `1 <= nums[i] <= 100`
 * 3. `nums` 的元素总和不会超过 `5000`。
 */

function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    
    // 如果总和是奇数，无法分成两个相等的子集
    if (sum % 2 !== 0) return false;
    
    const target = sum / 2;
    
    // 初始化 dp 数组，dp[i] 表示是否能够凑出和为 i 的子集
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;  // 和为 0 总是可以实现
    
    // 遍历数组中的每个元素
    for (const num of nums) {
        // 从后往前遍历，避免重复使用同一个元素
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    // 如果 dp[target] 为 true，表示能找到一个和为 target 的子集
    return dp[target];
}
