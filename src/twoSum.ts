function twoSum(nums: number[], target: number): number[] {
    const map: {
        [key: number]: number;
    } = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }
    return [];
};

const nums = [2, 7, 11, 15], target = 9;
console.log(twoSum(nums, target));
