/**
 * 78. 子集
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。
 * 返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
 * 
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 */

// function subsets(nums: number[]): number[][] {
//     const result: number[][] = [];

//     function backtrack(start: number, curSubsets: number[]) {
//         result.push([...curSubsets]);

//         for (let i = start; i < nums.length; i++) {
//             curSubsets.push(nums[i]);
//             backtrack(i + 1, curSubsets);
//             curSubsets.pop();
//         }
//     }

//     backtrack(0, []);

//     return result;
// };

function subsets(nums: number[]): number[][] {
    const n = nums.length;
    const res: number[][] = [];

    for (let mask = 0; mask < (1 << n); mask++) {
        const t = []; // 当前子集
        for (let i = 0; i < nums.length; i++) {
            if (mask & (1 << i)) {
                t.push(nums[i])
            }
        }
        res.push(t);
    }
    return res;
};