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
 * @description 94. 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历结果。
 * 
 * @example
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 
 * @example
 * 输入：root = []
 * 输出：[]
 * 
 * @example
 * 输入：root = [1]
 * 输出：[1]
 * 
 * @约束条件
 * - 树中节点数目范围 [0, 100]
 * - -100 <= Node.val <= 100
 * 
 * 进阶：你可以通过迭代算法完成吗？
 */


class TreeNode {
    left: TreeNode | null;
    right: TreeNode | null;
    val: number;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

function buildTree(values: (number | null)[]): TreeNode | null {
    if (values.length === 0) return null;
    let root = new TreeNode(values[0]!);
    let index = 1;
    let queen = [root];
    while (index < values.length && queen.length > 0) {
        const cur = queen.shift();
        if (cur) {
            if (values[index] !== null) {
                cur.left = new TreeNode(values[index]!);
                queen.push(cur.left);
            }
            index++;
            if (index < values.length && values[index] !== null) {
                cur.right = new TreeNode(values[index]!);
                queen.push(cur.right);
            }
            index++;
        }
    }
    return root;
}

// function inorderTraversal(root: TreeNode | null): number[] {
//     if (!root) return [];
//     let res: number[] = [];
//     if (!root.left && !root.right) {
//         return [root.val];
//     }

//     if (root.left) {
//         res =[...res, ...inorderTraversal(root.left)];
//     }
//     res = [...res, root.val];
//     if (root.right) {
//         res =[...res, ...inorderTraversal(root.right)];
//     }
//     return res;
// };

// function inorderTraversal(root: TreeNode | null): number[] {
//     const res: number[] = [];
//     function traverse(node: TreeNode | null) {
//         if (!node) return;
//         traverse(node.left);
//         res.push(node.val);
//         traverse(node.right);
//     }
//     traverse(root);
//     return res;
// };


function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];
    const stack: TreeNode[] = [];
    let current: TreeNode | null = root;

    while (current || stack.length) {
        // 入栈
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        res.push(current.val);
        current = current.right;
    }
    return res;
};

const root = [3,9,20,null,null,15,7];
console.log(buildTree(root));
console.log(inorderTraversal(buildTree(root)));

