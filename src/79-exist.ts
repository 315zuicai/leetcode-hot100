/**
 * 79. 单词搜索 (Word Search)
 * 给定一个 `m x n` 的字符网格 `board` 和一个字符串 `word`，
 * 如果 `word` 存在于网格中，返回 `true`；否则返回 `false`。
 * 
 * 单词可以由 **连续** 的字母构成，其中每两个字母之间可以是水平或垂直方向相邻，
 * 不能通过同一个字母的重复使用来构成单词。
 * 
 * 示例：
 * 输入：
 * board = [
 *   ['A', 'B', 'C', 'E'],
 *   ['S', 'F', 'C', 'S'],
 *   ['A', 'D', 'E', 'E']
 * ]
 * word = "ABCCED"
 * 输出：true
 * 
 * 示例 2：
 * 输入：
 * board = [
 *   ['A', 'B', 'C', 'E'],
 *   ['S', 'F', 'C', 'S'],
 *   ['A', 'D', 'E', 'E']
 * ]
 * word = "SEE"
 * 输出：true
 * 
 * 示例 3：
 * 输入：
 * board = [
 *   ['A', 'B', 'C', 'E'],
 *   ['S', 'F', 'C', 'S'],
 *   ['A', 'D', 'E', 'E']
 * ]
 * word = "ABCB"
 * 输出：false
 * 
 * 提示：
 * 1. `m == board.length`
 * 2. `n == board[i].length`
 * 3. `1 <= m, n <= 6`
 * 4. `1 <= word.length <= 15`
 * 5. `board[i][j]` 和 `word[i]` 都是大写英文字母。
 */

function exist(board: string[][], word: string): boolean {
    const m = board.length;
    const n = board[0].length;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    function dfs(i: number, j: number, index: number) {
        if (index === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) {
            return false;
        }

        const temp = board[i][j];
        board[i][j] = '*';
        for (let [dx, dy] of directions) {
            const newI = i + dx;
            const newJ = j + dy;
            if (dfs(newI, newJ, index + 1)) {
                return true;
            }
        }
        board[i][j] = temp;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};
