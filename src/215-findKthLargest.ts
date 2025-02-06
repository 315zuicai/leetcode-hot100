/**
 * 215. 数组中的第 K 个最大元素 (Kth Largest Element in an Array)
 * 
 * 给定一个整数数组 `nums` 和一个整数 `k`，请返回数组中 **第 k 个最大元素**。
 * 
 * **请注意**，你需要找的是数组排序后的第 `k` **大**的元素，而不是第 `k` 个不同的元素。
 * 
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * **示例 1：**
 * 输入：nums = [3,2,1,5,6,4], k = 2
 * 输出：5
 * 
 * **示例 2：**
 * 输入：nums = [3,2,3,1,2,4,5,5,6], k = 4
 * 输出：4
 * 
 * **提示：**
 * 1. `1 <= k <= nums.length <= 10^5`
 * 2. `-10^4 <= nums[i] <= 10^4`
 */

// function findKthLargest(nums: number[], k: number): number {
//     function partition(left: number, right: number): number {
//         let pivot = nums[right]; // 选取最右侧为 pivot
//         let i = left; // i 指向比 pivot 大的区间的起点

//         for (let j = left; j < right; j++) {
//             if (nums[j] >= pivot) { // 降序排列
//                 [nums[i], nums[j]] = [nums[j], nums[i]]; // 交换元素
//                 i++;
//             }
//         }
//         [nums[i], nums[right]] = [nums[right], nums[i]]; // 交换 pivot 到正确位置
//         return i; // 返回 pivot 位置
//     }

//     let left = 0, right = nums.length - 1, target = k - 1; // 第 k 大元素索引
//     while (left <= right) {
//         let pivotIndex = partition(left, right);
//         if (pivotIndex === target) return nums[pivotIndex]; // 找到答案
//         else if (pivotIndex < target) left = pivotIndex + 1; // 递归右侧
//         else right = pivotIndex - 1; // 递归左侧
//     }
//     return -1; // 不会执行到这里
// }


// 最小堆通常使用 数组 存储，并遵循 完全二叉树的存储规则：

// 父节点索引：parentIndex = Math.floor((index - 1) / 2)
// 左子节点索引：leftChild = 2 * index + 1
// 右子节点索引：rightChild = 2 * index + 2

/**
 * 使用最小堆（Min Heap）找数组中第 K 大的元素
 * 时间复杂度：O(n log k)
 * 空间复杂度：O(k)
 * 
 * @param nums 数组
 * @param k 第 k 大的元素
 * @returns 第 k 大的元素
 */
function findKthLargest(nums: number[], k: number): number {
    let minHeap = new MinHeap(k); // 创建一个大小为 k 的最小堆

    for (let num of nums) {
        minHeap.add(num); // 将数组中的每个元素插入堆中
    }

    return minHeap.peek(); // 返回堆顶元素，即第 k 大的元素
}

// 🔥 自定义最小堆实现（基于数组 & 二叉堆）
class MinHeap {
    heap: number[]; // 存储堆的数组
    capacity: number; // 堆的最大容量（最大存 k 个元素）

    constructor(capacity: number) {
        this.heap = []; // 初始化空堆
        this.capacity = capacity;
    }

    /**
     * 向最小堆中添加元素
     * @param val 要添加的元素
     */
    add(val: number) {
        if (this.heap.length < this.capacity) {
            // 如果堆未满，直接插入，并进行上浮调整
            this.heap.push(val);
            this.bubbleUp(); // 维护最小堆性质
        } else if (val > this.heap[0]) {
            // 如果堆已满，且新元素比堆顶元素大
            this.heap[0] = val; // 替换堆顶元素（最小值）
            this.bubbleDown(); // 重新调整堆，使其保持最小堆性质
        }
    }

    /**
     * 获取堆顶（最小值），即当前第 k 大的元素
     * @returns 堆顶元素
     */
    peek(): number {
        return this.heap[0]; // 堆顶是当前第 k 大的元素
    }

    /**
     * 上浮操作（Bubble Up）
     * 作用：当新元素插入堆底时，调整其位置以保持最小堆性质
     */
    private bubbleUp() {
        let index = this.heap.length - 1; // 新元素索引
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); // 计算父节点索引
            if (this.heap[index] >= this.heap[parentIndex]) break; // 若父节点更小，停止调整

            // 交换父子节点
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex; // 继续向上调整
        }
    }

    /**
     * 下沉操作（Bubble Down）
     * 作用：当堆顶元素被替换时，调整其位置以保持最小堆性质
     */
    private bubbleDown() {
        let index = 0; // 从堆顶开始
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1, right = 2 * index + 2; // 左右子节点索引
            let smallest = index; // 记录最小值位置，默认为当前节点

            // 比较左子节点
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            // 比较右子节点
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break; // 如果当前节点最小，停止调整

            // 交换当前节点和最小子节点
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest; // 继续向下调整
        }
    }
}
