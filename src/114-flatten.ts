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
 * @description 114. 二叉树展开为链表
 * 给你二叉树的根结点 root ，请你将它展开为一个单链表：
 * - 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
 * - 展开后的单链表应该与二叉树 先序遍历 顺序相同。
 * 
 * @example
 * 输入：root = [1,2,5,3,4,null,6]
 * 输出：[1,null,2,null,3,null,4,null,5,null,6]
 * 解释：
 *      1
 *     / \
 *    2   5
 *   / \   \
 *  3   4   6
 * 
 * 展开为：
 * 1
 *  \
 *   2
 *    \
 *     3
 *      \
 *       4
 *        \
 *         5
 *          \
 *           6
 * 
 * @constraints
 * - 树中结点数在范围 [0, 2000] 内
 * - -100 <= Node.val <= 100
 * 
 * @note 不要返回任何结果，需要原地修改
 */

// function flatten(root: TreeNode | null): void {
//     if (!root) {
//         return;
//     }
//     const arr: number[] = [];
//     function traverse(root: TreeNode | null) {
//         if (!root) {
//             return null;
//         }
//         arr.push(root.val);
//         traverse(root.left);
//         traverse(root.right);
//     }
//     traverse(root);
//     let cur = root;
//     for (let i = 1; i < arr.length; i++) {
//         cur.left = null;
//         cur.right = new TreeNode(arr[i]);
//         cur = cur.right;
//     }
// };


function flatten(root: TreeNode | null): void {
    let cur = root;
    while (cur) {
        if (cur.left) {
            let pre = cur.left;
            while (pre.right) {
                pre = pre.right;
            }

            pre.right = cur.right;

            cur.right = cur.left;
            cur.left = null;
        }
        
        cur = cur.right;
    }
};