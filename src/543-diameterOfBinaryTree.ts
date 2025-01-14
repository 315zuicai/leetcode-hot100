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
 * 543. 二叉树的直径
 * 
 * 给你一棵二叉树的根节点，返回该树的直径。
 * 
 * 二叉树的直径是指树中任意两个节点之间最长路径的长度。这条路径可能经过也可能不经过根节点。
 * 
 * 两节点之间路径的长度由它们之间边的数目表示。
 * 
 * 示例：
 *     1
 *    / \
 *   2   3
 *  / \     
 * 4   5    
 * 
 * 输出：3
 * 解释：路径 [4,2,1,3] 或 [5,2,1,3] 的长度都是 3
 * 
 * 注意：
 * - 给定二叉树的节点数目在 [1, 10^4] 范围内
 * - -100 <= Node.val <= 100
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxDiameter = 0;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        maxDiameter = Math.max(maxDiameter, left + right);

        return Math.max(left, right) + 1;
    };

    dfs(root);
    return maxDiameter;
}