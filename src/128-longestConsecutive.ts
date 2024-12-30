// function longestConsecutive(nums: number[]): number {
//     if (nums.length <= 1) return nums.length;
//     const sortedNums = nums.sort((a, b) => a - b);
//     let maxLen = 1, tempLen = 1;
//     for (let i = 0; i < sortedNums.length - 1; i++) {
//         if (sortedNums[i] + 1 === sortedNums[i + 1]) {
//             tempLen++;
//         } else if (sortedNums[i] === sortedNums[i + 1]) {
//             continue;
//         } else {
//             maxLen = tempLen > maxLen ? tempLen : maxLen;
//             tempLen = 1;
//         }
//     }
//     return Math.max(maxLen, tempLen);
// };
// 上述代码中使用了排序sort，时间复杂度是O(nlogn)，不满足O(n)

function longestConsecutive(nums: number[]): number {
    if (nums.length <= 1) return nums.length;
    const numsSet: Set<number> = new Set();
    for (let num of nums) {
        numsSet.add(num);
    }
    let maxLen = 1, res = 1;
    for (let nums of numsSet) {
        if (!numsSet.has(nums - 1)) {
            while (numsSet.has(nums + 1)) {
                nums++;
                maxLen++;
            }
            res = Math.max(maxLen, res);
            maxLen = 1;
        }

    }
    return res;
};

const nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));