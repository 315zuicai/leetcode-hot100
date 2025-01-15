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
 * @description 199. 二叉树的右视图
 * 给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 * 
 * @example
 * 输入: [1,2,3,null,5,null,4]
 * 输出: [1,3,4]
 * 解释:
 *    1            <---
 *  /   \
 * 2     3         <---
 *  \     \
 *   5     4       <---
 * 
 * @example
 * 输入: [1,null,3]
 * 输出: [1,3]
 * 
 * @constraints
 * - 二叉树的节点个数的范围是 [0,100]
 * - -100 <= Node.val <= 100
 */
function rightSideView(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length) {
        const size = queue.length; // 当前层的节点数
        for (let i = 0; i < size; i++) {
            const current = queue.shift()!;

            // 如果是当前层的最后一个节点，记录到结果
            if (i === size - 1) {
                result.push(current.val);
            }

            // 将左右子节点加入队列
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
    }

    return result;
}
