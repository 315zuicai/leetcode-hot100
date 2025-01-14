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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }
    const res: number[][] = [];
    const queen: TreeNode[] = [root];

    while (queen.length) {
        const size = queen.length;
        const temp = [];
        for (let i = 0; i < size; i++) {
            const node = queen.shift()!;
            temp.push(node.val);
            if (node.left) {
                queen.push(node.left)
            }
            if (node.right) {
                queen.push(node.right)
            }
        }
        res.push(temp);
    }
    return res;
};