/**
 * LeetCode 73. 矩阵置零
 * 
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。
 * 请使用 原地 算法。
 * 
 * 示例 1：
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出：[[1,0,1],[0,0,0],[1,0,1]]
 * 
 * 示例 2：
 * 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 * 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 * 
 * 提示：
 * m == matrix.length
 * n == matrix[0].length
 * 1 <= m, n <= 200
 * -2^31 <= matrix[i][j] <= 2^31 - 1
 * 
 * 进阶：
 * 1. 一个直观的解决方案是使用 O(mn) 的额外空间，但这不是一个好的解决方案。
 * 2. 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
 * 3. 你能想出一个仅使用常量空间的解决方案吗？
 */
function setZeroes(matrix: number[][]): void {
    let rowZero = false, colZero = false;
    const rowLen = matrix.length, colLen = matrix[0].length;
    if (matrix[0].includes(0)) {
        rowZero = true;
    }
    for (let i = 0; i < rowLen; i++) {
        if (matrix[i][0] === 0) {
            colZero = true;
        }
    }
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0
            }
        }
    }
    for (let i = 1; i < rowLen; i++) {
        for (let j = 1; j < colLen; j++) {
            if(matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (rowZero) {
        for (let j = 0; j < colLen; j++) {
            matrix[0][j] = 0;
        }
    }
    if (colZero) {
        for (let i = 0; i < rowLen; i++) {
            matrix[i][0] = 0;
        }
    }
};
const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)