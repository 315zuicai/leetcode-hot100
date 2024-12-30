function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        let area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(area, max);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        if (left === right) {
            break;
        }
    }
    return max;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const max = 49;
console.log(maxArea(height) === max);