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
 * @description 验证二叉搜索树
 * @param root 二叉树的根节点
 * @return 返回该二叉树是否为二叉搜索树
 * 
 * 题目要求：
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 
 * 有效二叉搜索树定义如下：
 * 1. 节点的左子树只包含 小于 当前节点的数。
 * 2. 节点的右子树只包含 大于 当前节点的数。
 * 3. 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 注意：
 * - 树中节点数目范围在[1, 10^4] 内
 * - -2^31 <= Node.val <= 2^31 - 1
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number;
 *     left: TreeNode | null;
 *     right: TreeNode | null;
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val === undefined ? 0 : val);
 *         this.left = (left === undefined ? null : left);
 *         this.right = (right === undefined ? null : right);
 *     }
 * }
 */

/**
 * @description 验证二叉搜索树
 * @param root 二叉树的根节点
 * @return 返回该二叉树是否为二叉搜索树
 */

// function isValidBST(root: TreeNode | null): boolean {
//     if (!root) return true;

//     // 队列存储节点和它的有效区间 [lower, upper]
//     const queue: Array<[TreeNode, number | null, number | null]> = [[root, null, null]];

//     while (queue.length) {
//         const [node, lower, upper] = queue.shift()!;

//         // 如果节点的值不在合法范围内，返回 false
//         if ((lower !== null && node.val <= lower) || (upper !== null && node.val >= upper)) {
//             return false;
//         }

//         // 左子树：节点的值必须小于当前节点，更新上限
//         if (node.left) {
//             queue.push([node.left, lower, node.val]);
//         }

//         // 右子树：节点的值必须大于当前节点，更新下限
//         if (node.right) {
//             queue.push([node.right, node.val, upper]);
//         }
//     }

//     return true;
// }

// DFS 递归
function isValidBST(root: TreeNode | null): boolean {
    function dfs(node: TreeNode | null, lower: number, upper: number): boolean {
        if (!node) {
            return true;
        }
        if (node.val <= lower || node.val >= upper) {
            return false;
        }
        return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
    }
    return dfs(root, -Infinity, +Infinity)
}