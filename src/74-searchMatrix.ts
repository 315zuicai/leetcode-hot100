/**
 * 74. 搜索二维矩阵 (Search a 2D Matrix)
 * 编写一个高效算法来判断一个目标值 `target` 是否存在于一个 `m x n` 的矩阵中。
 * 这个矩阵具有以下特性：
 * 1. 每行中的整数从左到右按升序排列。
 * 2. 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 示例 1：
 * 输入：matrix = [
 *   [1, 3, 5, 7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ], target = 3
 * 输出：true
 * 
 * 示例 2：
 * 输入：matrix = [
 *   [1, 3, 5, 7],
 *   [10, 11, 16, 20],
 *   [23, 30, 34, 60]
 * ], target = 13
 * 输出：false
 * 
 * 提示：
 * 1. `m == matrix.length`
 * 2. `n == matrix[i].length`
 * 3. `1 <= m, n <= 100`
 * 4. `-10^4 <= matrix[i][j], target <= 10^4`
 */

function searchMatrix(matrix: number[][], target: number): boolean {
    const row = matrix.length;
    const col = matrix[0].length;

    let left = 0, right = row * col - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const curRow = Math.floor(mid / col);
        const curCol = mid % col;
        const midVal = matrix[curRow][curCol];
        if (midVal === target) {
            return true;
        } else if (midVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;

};
