/**
 * 994. 腐烂的橘子
 * 在给定的网格中，每个单元格可以有以下三个值之一：
 * 1. 值 0 代表空单元格；
 * 2. 值 1 代表新鲜橘子；
 * 3. 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子会使与其四面相邻的新鲜橘子腐烂。
 * 返回使得所有橘子都腐烂所需的最小分钟数。如果不可能，返回 -1。
 * 
 * 示例 1：
 * 输入：[[2,1,1],[1,1,0],[0,1,1]]
 * 输出：4
 * 
 * 示例 2：
 * 输入：[[2,1,1],[0,1,1],[1,0,1]]
 * 输出：-1
 * 解释：左下角的橘子（第 3 行，第 1 列）永远不会腐烂，因为腐烂只能发生在 4 个正向邻居（上、下、左、右）之间。
 * 
 * 示例 3：
 * 输入：[[0,2]]
 * 输出：0
 * 解释：因为 0 分钟时已经没有新鲜橘子了，所以答案是 0。
 */

function orangesRotting(grid: number[][]): number {
    if (grid.length === 0 || grid[0].length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let minutes = 0;
    // 方向 [0, 1] 表示向右，[0, -1] 表示向左，[1, 0] 表示向下，[-1, 0] 表示向上
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue: number[][] = [];
    let freshCount = 0; // 新鲜橘子的数量
    // 将所有腐烂的橘子加入队列
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    while (queue.length && freshCount > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!;
            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    freshCount--;
                    queue.push([newRow, newCol]);
                }
            }
        }
        minutes++;
    }
    return (freshCount === 0 ? minutes : -1);
};