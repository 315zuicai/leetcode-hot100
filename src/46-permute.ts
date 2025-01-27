/**
 * 46. 全排列 (Permutations)
 * 给定一个不含重复数字的数组 `nums` ，返回其所有可能的全排列。
 * 
 * 示例：
 * 输入：nums = [1, 2, 3]
 * 输出：[
 *   [1, 2, 3],
 *   [1, 3, 2],
 *   [2, 1, 3],
 *   [2, 3, 1],
 *   [3, 1, 2],
 *   [3, 2, 1]
 * ]
 * 
 * 提示：
 * 1. `1 <= nums.length <= 6`
 * 2. `-10 <= nums[i] <= 10`
 * 3. `nums` 中的所有整数互不相同。
 */

function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    function backTrack() {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            // 选
            path.push(nums[i]);
            used[i] = true;
            // 递归
            backTrack();
            // 撤销
            path.pop();
            used[i] = false;
        }
    }

    backTrack();
    return res;
};
