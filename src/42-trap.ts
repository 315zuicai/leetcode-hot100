// function trap(height: number[]): number {
//     let sum = 0, left = 0, right = height.length - 1, leftMax = 0, rightMax = 0;
//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 sum += leftMax - height[left];
//             }
//             left++;
//         }
//         else {
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 sum += rightMax - height[right];
//             }
//             right--;
//         }
//     }
//     return sum;
// }

function trap(height: number[]): number {
    if (height.length < 3) return 0;

    const n = height.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);
    let sum = 0;

    // 计算 leftMax
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // 计算 rightMax
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // 计算总的储水量
    for (let i = 0; i < n; i++) {
        sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return sum;
}




const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const height2 = [4, 2, 0, 3, 2, 5];
const height3 = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3];
console.log(trap(height) == 6);
console.log(trap(height2) === 9);
console.log(trap(height3) === 83);
