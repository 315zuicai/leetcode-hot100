/**
 * 198. 打家劫舍 (House Robber)
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房屋内都藏有一定的现金，唯一的制约条件是：
 * - 如果两间相邻的房屋被盗，报警系统将会自动触发。
 * 
 * 给定一个代表每间房屋存放金额的数组 `nums`，请计算 **在不触动警报的情况下**，小偷能够偷窃的 **最高金额**。
 * 
 * **示例 1：**
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：偷窃第 1 间 (金额 = 1) 和第 3 间 (金额 = 3)，总金额 = 1 + 3 = 4。
 * 
 * **示例 2：**
 * 输入：nums = [2,7,9,3,1]
 * 输出：12
 * 解释：偷窃第 1 间 (金额 = 2)、第 3 间 (金额 = 9) 和第 5 间 (金额 = 1)，
 * 总金额 = 2 + 9 + 1 = 12。
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 100`
 * 2. `0 <= nums[i] <= 400`
 */

function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev2 = 0;  // dp[i-2]
    let prev1 = 0;  // dp[i-1]

    for (let num of nums) {
        let current = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
