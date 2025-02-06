/**
 * 295. 数据流的中位数 (Find Median from Data Stream)
 * 
 * 设计一个数据结构，支持以下两种操作：
 * - `void addNum(int num)` 将数据流中的整数 `num` 添加到数据结构中。
 * - `double findMedian()` 返回数据流中目前所有元素的 **中位数**。
 * 
 * **示例：**
 * ```typescript
 * var medianFinder = new MedianFinder();
 * medianFinder.addNum(1);
 * medianFinder.addNum(2);
 * console.log(medianFinder.findMedian()); // 返回 1.5
 * medianFinder.addNum(3);
 * console.log(medianFinder.findMedian()); // 返回 2.0
 * ```
 * 
 * **提示：**
 * 1. `-10^5 <= num <= 10^5`
 * 2. 在调用 `findMedian` 之前，数据结构中至少有一个元素
 * 3. 最多调用 `5 * 10^4` 次 `addNum` 和 `findMedian`
 * 
 * **进阶：**
 * - 你能设计一个 **时间复杂度为 O(log n)** 的数据结构来计算中位数吗？
 */

class MedianFinder {
    private leftHeap: number[];  // 最大堆（用负数来模拟最大堆）
    private rightHeap: number[]; // 最小堆

    constructor() {
        this.leftHeap = [];
        this.rightHeap = [];
    }

    // 最大堆插入
    private pushMaxHeap(num: number): void {
        this.leftHeap.push(num);
        let index = this.leftHeap.length - 1;
        // 维护最大堆
        while (index > 0 && this.leftHeap[index] > this.leftHeap[Math.floor((index - 1) / 2)]) {
            [this.leftHeap[index], this.leftHeap[Math.floor((index - 1) / 2)]] = [this.leftHeap[Math.floor((index - 1) / 2)], this.leftHeap[index]];
            index = Math.floor((index - 1) / 2);
        }
    }

    // 最小堆插入
    private pushMinHeap(num: number): void {
        this.rightHeap.push(num);
        let index = this.rightHeap.length - 1;
        // 维护最小堆
        while (index > 0 && this.rightHeap[index] < this.rightHeap[Math.floor((index - 1) / 2)]) {
            [this.rightHeap[index], this.rightHeap[Math.floor((index - 1) / 2)]] = [this.rightHeap[Math.floor((index - 1) / 2)], this.rightHeap[index]];
            index = Math.floor((index - 1) / 2);
        }
    }

    // 最大堆弹出
    private popMaxHeap(): number {
        if (this.leftHeap.length === 0) return 0;
        const max = this.leftHeap[0];
        this.leftHeap[0] = this.leftHeap[this.leftHeap.length - 1];
        this.leftHeap.pop();
        let index = 0;
        while (index < this.leftHeap.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let largest = index;

            if (leftChild < this.leftHeap.length && this.leftHeap[leftChild] > this.leftHeap[largest]) {
                largest = leftChild;
            }

            if (rightChild < this.leftHeap.length && this.leftHeap[rightChild] > this.leftHeap[largest]) {
                largest = rightChild;
            }

            if (largest === index) break;

            [this.leftHeap[index], this.leftHeap[largest]] = [this.leftHeap[largest], this.leftHeap[index]];
            index = largest;
        }
        return max;
    }

    // 最小堆弹出
    private popMinHeap(): number {
        if (this.rightHeap.length === 0) return 0;
        const min = this.rightHeap[0];
        this.rightHeap[0] = this.rightHeap[this.rightHeap.length - 1];
        this.rightHeap.pop();
        let index = 0;
        while (index < this.rightHeap.length) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < this.rightHeap.length && this.rightHeap[leftChild] < this.rightHeap[smallest]) {
                smallest = leftChild;
            }

            if (rightChild < this.rightHeap.length && this.rightHeap[rightChild] < this.rightHeap[smallest]) {
                smallest = rightChild;
            }

            if (smallest === index) break;

            [this.rightHeap[index], this.rightHeap[smallest]] = [this.rightHeap[smallest], this.rightHeap[index]];
            index = smallest;
        }
        return min;
    }

    addNum(num: number): void {
        if (this.leftHeap.length === 0 || num <= this.leftHeap[0]) {
            this.pushMaxHeap(num);  // 插入最大堆
        } else {
            this.pushMinHeap(num);  // 插入最小堆
        }

        // 保证堆的大小平衡
        if (this.leftHeap.length > this.rightHeap.length + 1) {
            this.pushMinHeap(this.popMaxHeap());  // 左堆大于右堆时，将左堆的最大值移动到右堆
        } else if (this.rightHeap.length > this.leftHeap.length) {
            this.pushMaxHeap(this.popMinHeap());  // 右堆大于左堆时，将右堆的最小值移动到左堆
        }
    }

    findMedian(): number {
        if (this.leftHeap.length > this.rightHeap.length) {
            return this.leftHeap[0];  // 当左堆比右堆多一个元素时，返回左堆的堆顶
        }
        return (this.leftHeap[0] + this.rightHeap[0]) / 2.0;  // 两堆大小相等时，返回两个堆顶元素的平均值
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder();
 * obj.addNum(num);
 * var param_2 = obj.findMedian();
 */
