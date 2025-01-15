/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 给定一个非空二叉树，返回其最大路径和。
 * 对于这个问题，路径定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。
 * 路径至少包含一个节点，且不一定经过根节点。
 * 
 * 示例 1:
 * 输入: [1,2,3]
 *        1
 *       / \
 *      2   3
 * 输出: 6
 * 
 * 示例 2:
 * 输入: [-10,9,20,null,null,15,7]
 *    -10
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 输出: 42
 */

// 递归
function maxPathSum(root: TreeNode | null): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    function maxGain(node: TreeNode | null): number {
        if (!node) return 0;
        const left = Math.max(maxGain(node.left), 0);
        const right = Math.max(maxGain(node.right), 0);

        const curSum = node.val + left + right;
        maxSum = Math.max(maxSum, curSum);
        return node.val + Math.max(left, right);
    }
    maxGain(root);
    return maxSum;
}
