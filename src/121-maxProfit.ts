/**
 * 121. 买卖股票的最佳时机 (Best Time to Buy and Sell Stock)
 * 
 * 给定一个数组 `prices`，它的第 `i` 个元素表示某只股票在第 `i` 天的价格。
 * 
 * 你只能 **选择某一天买入** 这只股票，并 **选择未来的某一天卖出** 该股票。
 * 计算你所能获取的 **最大利润**。
 * 
 * **注意：** 你 **不能** 在买入股票前卖出股票。
 * 
 * **示例 1：**
 * 输入：prices = [7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（价格 = 1）买入，在第 5 天（价格 = 6）卖出，利润 = 6 - 1 = 5。
 *      注意，不能在第 1 天（价格 = 7）买入，然后在第 2 天（价格 = 1）卖出，因为不能先卖再买。
 * 
 * **示例 2：**
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下，无论何时买入股票，都不会有利润，因此最大利润为 0。
 * 
 * **提示：**
 * 1. `1 <= prices.length <= 10^5`
 * 2. `0 <= prices[i] <= 10^4`
 */

function maxProfit(prices: number[]): number {
    let minPrice = Infinity; // 记录最低买入价格
    let maxProfit = 0; // 记录最大利润

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // 更新最低买入价格
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // 计算最大利润
        }
    }

    return maxProfit;
}
