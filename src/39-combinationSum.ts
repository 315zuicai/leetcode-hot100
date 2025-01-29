/**
 * 39. 组合总和 (Combination Sum)
 * 给定一个无重复元素的正整数数组 `candidates` 和一个目标正整数 `target`，
 * 找出 `candidates` 中所有可以使数字之和等于 `target` 的组合。
 * 
 * `candidates` 中的数字可以无限制重复被选取。
 * 
 * 示例 1：
 * 输入：candidates = [2,3,6,7], target = 7
 * 输出：[[7],[2,2,3]]
 * 解释：
 * - 7 直接就是目标
 * - 2+2+3 = 7
 * 
 * 示例 2：
 * 输入：candidates = [2,3,5], target = 8
 * 输出：[[2,2,2,2],[2,3,3],[3,5]]
 * 
 * 示例 3：
 * 输入：candidates = [2], target = 1
 * 输出：[]
 * 
 * 提示：
 * 1. `1 <= candidates.length <= 30`
 * 2. `1 <= candidates[i] <= 200`
 * 3. `candidates` 中的每个元素互不相同。
 * 4. `1 <= target <= 500`
 */

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    function backtrack(remaining: number, start: number, comb: number[]) {
        if (remaining === 0) {
            result.push([...comb]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            const cur = candidates[i];
            if (cur > remaining) {
                continue;
            }
            comb.push(cur);
            backtrack(remaining - cur, i, comb);
            comb.pop();
        }
    }
    backtrack(target, 0, []);
    return result;
};
