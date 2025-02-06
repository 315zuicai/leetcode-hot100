/**
 * 300. 最长递增子序列 (Longest Increasing Subsequence)
 * 
 * 给定一个整数数组 `nums`，找到其中最长严格递增子序列的长度。
 * 
 * **示例 1：**
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4。
 * 
 * **示例 2：**
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 解释：最长递增子序列是 [0,1,2,3]，因此长度为 4。
 * 
 * **示例 3：**
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 解释：最长递增子序列是 [7]，因此长度为 1。
 * 
 * **提示：**
 * 1. `1 <= nums.length <= 2500`
 * 2. `-10^4 <= nums[i] <= 10^4`
 */

// function lengthOfLIS(nums: number[]): number {
//     if (nums.length === 0) return 0;

//     // dp[i]表示以nums[i]结尾的最长递增子序列的长度
//     const dp = new Array(nums.length).fill(1);

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     // 返回最大值，即为最长递增子序列的长度
//     return Math.max(...dp);
// }

function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];
    
    for (const num of nums) {
        let left = 0, right = tails.length;
        
        // 使用二分查找找出当前 num 应该插入的位置
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // 如果找到合适的位置，替换 tails 中的元素
        if (left < tails.length) {
            tails[left] = num;
        } else {
            tails.push(num);
        }
    }
    
    // tails 的长度即为最长递增子序列的长度
    return tails.length;
}

