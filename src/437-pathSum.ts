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
 * @description 437. 路径总和 III
 * 给定一个二叉树的根节点 root 和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * @example
 * 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
 * 输出：3
 * 解释：和等于 8 的路径有 3 条，如下所示：
 * 5 -> 3
 * 5 -> 2 -> 1
 * -3 -> 11
 * 
 * @example
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：3
 * 
 * @constraints
 * - 二叉树的节点个数的范围是 [0,1000]
 * - -10^9 <= Node.val <= 10^9
 * - -1000 <= targetSum <= 1000
 */
// // 递归
// function pathSum(root: TreeNode | null, targetSum: number): number {
//     if (!root) {
//         return 0;
//     }

//     let res = 0;
//     function pathNumFromNode(node: TreeNode | null, target: number) {
//         if (!node) {
//             return;
//         }
//         if (node.val === target) {
//             res++;
//         }

//         pathNumFromNode(node.left, target - node.val);
//         pathNumFromNode(node.right, target - node.val);
//     }

//     function dfs(node: TreeNode | null) {
//         if (!node) {
//             return;
//         }

//         pathNumFromNode(node, targetSum);
//         dfs(node.left);
//         dfs(node.right);
//     }

//     dfs(root);

//     return res;
// };

// 前缀和
function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = 0;
    let prefixSumMap = new Map<number, number>();
    
    // 初始化 Map，存储路径和为 0 的前缀和为 1，表示我们有一个虚拟的路径和为 0 的起点
    prefixSumMap.set(0, 1);

    function dfs(node: TreeNode | null, currentSum: number): void {
        if (!node) return;

        // 更新当前路径和
        currentSum += node.val;

        // 如果当前路径和减去 targetSum 的差值在 prefixSumMap 中，说明有路径满足要求
        count += prefixSumMap.get(currentSum - targetSum) || 0;

        // 将当前路径和存入 map，记录路径和出现次数
        prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);

        // 遍历左右子树
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        // 在回溯时，减少当前路径和的计数，避免影响其他路径的计算
        prefixSumMap.set(currentSum, prefixSumMap.get(currentSum)! - 1);
    }

    // 从根节点开始深度优先搜索
    dfs(root, 0);

    return count;
}