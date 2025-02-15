/**
 * 42. 接雨水
 * 
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 示例 1：
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水。
 * 
 * 示例 2：
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 提示：
 * - n == height.length
 * - 1 <= n <= 2 * 104
 * - 0 <= height[i] <= 105
 */

function trap(height: number[]): number {
    if (height.length < 3) return 0;

    const n = height.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let sum = 0;

    // 计算 leftMax
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // 计算 rightMax
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // 计算总的储水量
    for (let i = 0; i < n; i++) {
        sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return sum;
}




const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5];
const height3 = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3];
console.log(trap(height) == 6);
console.log(trap(height2) === 9);
console.log(trap(height3) === 83);
