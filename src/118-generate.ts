/**
 * 118. 杨辉三角 (Pascal's Triangle)
 * 
 * 给定一个整数 `numRows`，生成杨辉三角的前 `numRows` 行。
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * **示例 1：**
 * 输入：numRows = 5
 * 输出：[
 *     [1],
 *     [1,1],
 *     [1,2,1],
 *     [1,3,3,1],
 *     [1,4,6,4,1]
 * ]
 * 
 * **示例 2：**
 * 输入：numRows = 1
 * 输出：[[1]]
 * 
 * **提示：**
 * 1. `1 <= numRows <= 30`
 */

function generate(numRows: number): number[][] {
    // 初始化结果数组
    let triangle: number[][] = [];

    // 遍历生成每一行
    for (let i = 0; i < numRows; i++) {
        // 每一行的数组
        let row: number[] = new Array(i + 1).fill(1); // 先填充 1

        // 计算除首尾以外的元素
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // 将当前行添加到三角形中
        triangle.push(row);
    }

    return triangle;
}
