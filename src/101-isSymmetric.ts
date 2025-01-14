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
 * 101. 对称二叉树
 * 
 * 给你一个二叉树的根节点 root，检查它是否轴对称。
 * 
 * 示例 1：
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 示例 2：
 *     1
 *    / \
 *   2   2
 *    \   \
 *     3    3
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 提示：
 * - 树中节点数目在范围 [1, 1000] 内
 * - -100 <= Node.val <= 100
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 */

// // 递归
// function isSymmetric(root: TreeNode | null): boolean {
//     if (!root) {
//         return true;
//     }
//     function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
//         if (!t1 && !t2) {
//             return true;
//         }
//         if (!t1 || !t2) {
//             return false;
//         }
//         return (
//             t1.val === t2.val
//             && isMirror(t1.left, t2.right)
//             && isMirror(t1.right, t2.left)
//         );
//     }
//     return isMirror(root.left, root.right);
// };

// 迭代
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    const queen: Array<TreeNode | null> = [root.left, root.right];

    while (queen.length) {
        const left = queen.shift()!;
        const right = queen.shift()!;
        if (!left && !right) {
            continue;
        }
        if (!left || !right) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }
        queen.push(left.left);
        queen.push(right.right);
        queen.push(left.right);
        queen.push(right.left);
    }
    return true;
};