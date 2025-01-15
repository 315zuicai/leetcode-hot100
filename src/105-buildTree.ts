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
 * @description 105. 从前序与中序遍历序列构造二叉树
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， 
 * inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 * 
 * @example
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 * 解释:
 *    3
 *   / \
 *  9  20
 *     /  \
 *    15   7
 * 
 * @constraints
 * - 1 <= preorder.length <= 3000
 * - inorder.length == preorder.length
 * - -3000 <= preorder[i], inorder[i] <= 3000
 * - preorder 和 inorder 均无重复元素
 * - inorder 均出现在 preorder
 * - preorder 保证为二叉树的前序遍历序列
 * - inorder 保证为二叉树的中序遍历序列
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length ||  !inorder.length) {
        return null;
    }
    const inorderIndexMap: Map<number, number> = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    let preorderIndex = 0;

    function helper(start: number, end: number): TreeNode | null {
        if (start > end) {
            return null;
        }
        const val = preorder[preorderIndex];
        preorderIndex++;
        const root = new TreeNode(val);
        const inorderIndex = inorderIndexMap.get(val)!;

        root.left = helper(start, inorderIndex - 1);
        root.right = helper(inorderIndex + 1, end);
        return root;
    }

    return helper(0, inorder.length - 1);
};