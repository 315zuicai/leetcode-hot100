/**
 * 155. 最小栈 (Min Stack)
 * 
 * 设计一个支持 `push`、`pop`、`top` 操作，并能在 **常数时间** 内检索到最小元素的栈 `MinStack`。
 * 
 * **实现 MinStack 类：**
 * - `MinStack()` 初始化栈对象。
 * - `void push(int val)` 将元素 `val` 推入栈中。
 * - `void pop()` 移除栈顶元素。
 * - `int top()` 获取栈顶元素。
 * - `int getMin()` 获取栈中的最小元素。
 * 
 * **示例 1：**
 * ```typescript
 * var minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * console.log(minStack.getMin()); // 返回 -3
 * minStack.pop();
 * console.log(minStack.top());    // 返回 0
 * console.log(minStack.getMin()); // 返回 -2
 * ```
 * 
 * **提示：**
 * 1. `-2^31 <= val <= 2^31 - 1`
 * 2. `pop`、`top` 和 `getMin` 操作总是在 **非空栈** 上调用
 * 3. 最多调用 `3 * 10^4` 次 `push`、`pop`、`top` 和 `getMin`
 */

class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        // 维护辅助栈，确保它的栈顶是当前最小值
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        if (this.stack.length === 0) return;
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * var param_3 = obj.top();
 * var param_4 = obj.getMin();
 */
