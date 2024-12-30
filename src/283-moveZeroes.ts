/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//     if (nums.length <= 1) return;
//     let left = 0, right = nums.length - 1;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             left = i;
//             nums.splice(i, 1);
//             nums.push(0);
//             i--;
//             right--;
//         }
//         if (left > right || right === 0) {
//             break;
//         }
//     }
// };

function moveZeroes(nums: number[]): void {
    if (nums.length <= 1) return;
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[left] = nums[i];
            if (left !== i) {
                nums[i] = 0;
            }
            left++;
        }
    }
};

