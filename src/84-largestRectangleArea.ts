/**
 * 84. 柱状图中最大的矩形 (Largest Rectangle in Histogram)
 * 
 * 给定 `n` 个非负整数 `heights`，每个整数表示柱状图中 **宽度为 1** 的柱子的高度，
 * 计算能够勾勒出的 **最大矩形面积**。
 * 
 * **示例 1：**
 * 输入：heights = [2,1,5,6,2,3]
 * 输出：10
 * 解释：最大的矩形面积由 `5` 和 `6` 组成，高度为 `5`，宽度为 `2`，面积 = 5 * 2 = 10。
 * 
 * **示例 2：**
 * 输入：heights = [2,4]
 * 输出：4
 * 
 * **提示：**
 * 1. `1 <= heights.length <= 10^5`
 * 2. `0 <= heights[i] <= 10^4`
 */

function largestRectangleArea(heights: number[]): number {
    let stack: number[] = [];  // 维护索引的单调递增栈
    let maxArea = 0;
    
    // 在 heights 末尾添加一个 0，确保所有柱子都会出栈计算
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let top = stack.pop()!;  // 弹出栈顶索引
            let h = heights[top];  // 获取高度
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1; // 计算宽度
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);  // 将当前索引入栈
    }

    return maxArea;
}
