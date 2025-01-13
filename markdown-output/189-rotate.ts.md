# 189-rotate.ts

```typescript
/**
 * 189. 轮转数组
 * 
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释: 向右轮转 3 步: [7,1,2,3,4,5,6] -> [6,7,1,2,3,4,5] -> [5,6,7,1,2,3,4]
 * 
 * 示例 2:
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 向右轮转 2 步: [99,-1,-100,3] -> [3,99,-1,-100]
 * 
 * 提示：
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - 0 <= k <= 10^5
 * 
 * 进阶：
 * - 尝试使用空间复杂度为 O(1) 的原地算法解决这个问题
 * 
 * Do not return anything, modify nums in-place instead.
 */
// function rotate(nums: number[], k: number): void {
//     const len = nums.length;
//     for (let i = 0; i < k; i++) {
//         const right = nums.pop()!;
//         nums.unshift(right);
//     }
// };
// function rotate(nums: number[], k: number): void {
//     k = k % nums.length;
//     const reverse = (nums: number[], start: number, end: number) => {
//         while (start < end) {
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start++;
//             end--;
//         }
//     }
//     reverse(nums, 0, nums.length - 1);
//     reverse(nums, 0, k - 1);
//     reverse(nums, k, nums.length - 1);
// };
// 关键逻辑 目标位置=(i+k)%n
function rotate(nums: number[], k: number): void {
    const len = nums.length;
    k = k % len;
    if (k === 0 || len <= 1) return;
    let count = 0;
    for (let start = 0; count < len; start++) {
        let cur = start;
        let prev = nums[start];
        do {
            const next = (cur + k) % len;
            [prev, nums[next]] = [nums[next], prev];
            cur = next;
            count++;
        } while (start !== cur)
    }
    console.log(nums);
};
const nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k)
```
