/**
 * 51. N 皇后问题 (N-Queens)
 * 按照国际象棋的规则摆放 N 个皇后，要求它们不能相互攻击。
 * 给你一个整数 `n` ，返回所有不同的 N 皇后问题的解决方案。
 * 
 * 每种解法包含一个不同的 N 皇后问题的棋子摆放方案，
 * 其中 `‘Q’` 和 `‘.’` 分别表示皇后和空位。
 * 
 * 示例 1：
 * 输入：n = 4
 * 输出：[
 *   [".Q..",  // 表示第一个解决方案
 *    "...Q",
 *    "Q...",
 *    "..Q."],
 * 
 *   ["..Q.",  // 表示第二个解决方案
 *    "Q...",
 *    "...Q",
 *    ".Q.."]
 * ]
 * 
 * 示例 2：
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 提示：
 * 1. `1 <= n <= 9`
 * 2. 每种解法中，`n` 行字符串表示一个解决方案。
 */

function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[] = Array.from({length: n}, () => '.'.repeat(n));

    function isValid(row: number, col: number) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
            if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') {
                return false;
            }
            if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') {
                return false;
            }
        }
        return true;
    }

    function backtrack(row: number) {
        if (row === n) {
            result.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row] = board[row].slice(0, col) + 'Q' + board[row].slice(col + 1);
                backtrack(row + 1);
                board[row] =  board[row].slice(0, col) + '.' + board[row].slice(col + 1);
            }
        }
    }

    backtrack(0);
    return result;
};

console.log(solveNQueens(4))
