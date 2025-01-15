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
 * @description 230. 二叉搜索树中第K小的元素
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * 
 * @example
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * @example
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 * 
 * @constraints
 * - 树中的节点数为 n
 * - 1 <= k <= n <= 10^4
 * - 0 <= Node.val <= 10^4
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    if (!root) {
        return 0;
    }
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;
    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        k--;
        if (k === 0) {
            return current.val;
        }
        current = current.right;
    }
};