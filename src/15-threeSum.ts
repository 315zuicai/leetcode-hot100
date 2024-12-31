function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res: number[][] = [];
    let left = 1, right = nums.length - 1;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[right] === nums[right + 1]) right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else if (sum > 0) {
                right--
            } else {
                left++;
            }
        }
    }
    return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));