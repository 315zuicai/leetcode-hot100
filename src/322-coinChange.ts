/**
 * 322. 零钱兑换 (Coin Change)
 * 
 * 给定不同面额的硬币 `coins` 和一个总金额 `amount`，编写一个函数来计算可以凑成总金额所需的最少硬币个数。如果没有任何一种硬币组合能组成该金额，返回 `-1`。
 * 
 * 你有无限个每种面额的硬币。
 * 
 * **示例 1：**
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 
 * **示例 2：**
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 解释：无法凑成 3。
 * 
 * **示例 3：**
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 解释：没有硬币就能凑成 0。
 * 
 * **示例 4：**
 * 输入：coins = [1], amount = 2
 * 输出：2
 * 解释：2 = 1 + 1
 * 
 * **提示：**
 * 1. `1 <= coins.length <= 12`
 * 2. `1 <= coins[i] <= 2^31 - 1`
 * 3. `0 <= amount <= 10^4`
 */

function coinChange(coins: number[], amount: number): number {
    // 初始化dp数组，大小为amount + 1，所有元素初始化为Infinity
    let dp = new Array(amount + 1).fill(Infinity);
    
    // dp[0] = 0，因为金额为0时不需要任何硬币
    dp[0] = 0;
    
    // 遍历所有金额
    for (let i = 1; i <= amount; i++) {
        // 对每个硬币，更新dp数组
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    // 如果dp[amount]还是Infinity，说明无法凑成该金额
    return dp[amount] === Infinity ? -1 : dp[amount];
}
