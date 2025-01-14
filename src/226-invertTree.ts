/**
 * 226. 翻转二叉树
 * 
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 
 * 示例 1：
 *     4                 4
 *    / \               / \
 *   2   7     =>     7   2
 *  / \  / \         / \  / \
 * 1  3 6   9       9  6 3   1
 * 
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 示例 2：
 *     2            2
 *    / \    =>    / \
 *   1   3        3   1
 * 
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
 * 
 * 示例 3：
 * 输入：root = []
 * 输出：[]
 * 
 * 提示：
 * - 树中节点数目范围在 [0, 100] 内
 * - -100 <= Node.val <= 100
 */

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

// // 递归
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) return null;
//     // 先保存左子树的结果
//     const left = invertTree(root.left);
//     // 交换左右子树
//     root.left = invertTree(root.right);
//     root.right = left;
//     return root;
// };

// // DFS - 栈
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) return null;
//     const stack: TreeNode[] = [root];
//     while (stack.length) {
//         const cur = stack.pop()!;
//         [cur.left, cur.right] = [cur.right, cur.left];
//         if (cur.left) {
//             stack.push(cur.left);
//         }
//         if (cur.right) {
//             stack.push(cur.right);
//         }
//     }
//     return root;
// };

// // BFS - 队列
// function invertTree(root: TreeNode | null): TreeNode | null {
//     if (!root) return null;
//     const queue: TreeNode[] = [root];
//     while (queue.length) {
//         const node = queue.shift()!;

//         [node.left, node.right] = [node.right, node.left];

//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return root;
// };