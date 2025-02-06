/**
 * 75. 颜色分类 (Sort Colors)
 * 
 * 给定一个包含 `n` 个元素的数组 `nums`，其中 `nums[i]` 取值只能是 `0`、`1` 或 `2`，表示 `n` 个不同颜色的球。  
 * 你需要**原地**对这些球进行排序，使得相同颜色的球相邻，并按照 `0`（红色）、`1`（白色）、`2`（蓝色）的顺序排列。  
 * **要求** 你**只能使用常数级别的额外空间**，并且**使用 `O(n)` 的时间复杂度**完成排序。
 * 
 * **示例 1：**
 * 输入：nums = [2,0,2,1,1,0]
 * 输出：[0,0,1,1,2,2]
 * 
 * **示例 2：**
 * 输入：nums = [2,0,1]
 * 输出：[0,1,2]
 * 
 * **示例 3：**
 * 输入：nums = [0]
 * 输出：[0]
 * 
 * **示例 4：**
 * 输入：nums = [1]
 * 输出：[1]
 * 
 * **提示：**
 * 1. `n == nums.length`
 * 2. `1 <= n <= 300`
 * 3. `nums[i]` 仅为 `0`、`1` 或 `2`
 * 
 * **进阶：**
 * - 你能想出一个仅使用**常数空间**的一趟扫描算法吗？
 */

function sortColors(nums: number[]): void {
    let low = 0, current = 0, high = nums.length - 1; // 初始化指针：low 处理 0，high 处理 2，current 负责遍历

    while (current <= high) { // 遍历数组
        if (nums[current] === 0) { 
            // 遇到 0：交换 current 和 low 指针的值，并移动 both 指针向右
            [nums[current], nums[low]] = [nums[low], nums[current]];
            low++; 
            current++;
        } else if (nums[current] === 2) { 
            // 遇到 2：交换 current 和 high 指针的值，并移动 high 指针向左
            [nums[current], nums[high]] = [nums[high], nums[current]];
            high--; // current 不变，因为换过来的值还需要检查
        } else { 
            // 遇到 1：跳过，继续遍历
            current++;
        }
    }
}
