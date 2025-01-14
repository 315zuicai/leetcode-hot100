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
 * 104. Maximum Depth of Binary Tree
 * 
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *     3
 *    / \
 *   9  20
 *      /  \
 *     15   7
 * 返回它的最大深度 3。
 */
// function maxDepth(root: TreeNode | null): number {
//     if (!root) {
//         return 0;
//     }
//     const leftMax = maxDepth(root.left);
//     const rightMax = maxDepth(root.right);
//     return Math.max(leftMax, rightMax) + 1;
// };

// 广度优先搜索 - BFS
// BFS 逐层遍历树，每遍历一层，深度加 1。
// function maxDepth(root: TreeNode | null): number {
//     if (!root) {
//         return 0;
//     }
//     const queen: TreeNode[] = [root];
//     let depth = 1;
//     while (queen.length) {
//         // 这里是关键，获取当前层的节点数
//         const size = queen.length;
//         for (let i = 0; i < size; i++) {
//             const node = queen.shift()!;
//             if (node.left) {
//                 queen.push(node.left);
//             }
//             if (node.right) {
//                 queen.push(node.right);
//             }
//         }
//         depth++;
//     }
//     return depth;
// };

// 深度优先搜索 - DFS
// 使用栈模拟递归的过程，同时记录每个节点所在的深度。
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    const stack: Array<{node: TreeNode, depth: number}> = [{node: root, depth: 1}];
    let maxDepth = 0;
    while (stack.length) {
        const {node, depth} = stack.pop()!;
        maxDepth = Math.max(maxDepth, depth);
        if (node.left) {
            stack.push({
                node: node.left,
                depth: depth + 1
            });
        }
        if (node.right) {
            stack.push({
                node: node.right,
                depth: depth + 1
            });
        }
    }
    return maxDepth;
};