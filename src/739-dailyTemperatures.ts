/**
 * 739. 每日温度 (Daily Temperatures)
 * 
 * 给定一个整数数组 `temperatures`，表示每日气温，返回一个数组 `answer`，
 * 其中 `answer[i]` 是指对于第 `i` 天，下一个更高气温出现在几天后。
 * 如果之后没有更高的温度，则 `answer[i] == 0`。
 * 
 * **示例 1：**
 * 输入：temperatures = [73,74,75,71,69,72,76,73]
 * 输出：[1,1,4,2,1,1,0,0]
 * 
 * **示例 2：**
 * 输入：temperatures = [30,40,50,60]
 * 输出：[1,1,1,0]
 * 
 * **示例 3：**
 * 输入：temperatures = [30,60,90]
 * 输出：[1,1,0]
 * 
 * **提示：**
 * 1. `1 <= temperatures.length <= 10^5`
 * 2. `30 <= temperatures[i] <= 100`
 */

function dailyTemperatures(temperatures: number[]): number[] {
    // 初始化结果数组，长度与 temperatures 相同，默认值为 0
    const answer: number[] = new Array(temperatures.length).fill(0);
    
    // 单调递减栈，存储索引（而不是具体的温度值）
    const stack: number[] = [];
    
    // 遍历温度数组
    for (let i = 0; i < temperatures.length; i++) {
        // 当前遍历到的温度
        const currentTemp = temperatures[i];
        
        // 栈不为空，并且当前温度高于栈顶索引对应的温度
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
            // 栈顶元素索引出栈
            const prevIndex = stack.pop()!;
            // 计算间隔天数并更新结果数组
            answer[prevIndex] = i - prevIndex;
        }
        
        // 将当前索引入栈
        stack.push(i);
    }
    
    // 返回计算完成的答案数组
    return answer;
}

const temperatures1 = [73,74,75,71,69,72,76,73];
console.log(dailyTemperatures(temperatures1));


// 索引 0, 温度 73 -> 入栈
// 索引 1, 温度 74 -> 73 出栈, 计算天数 1, 74 入栈
// 索引 2, 温度 75 -> 74 出栈, 计算天数 1, 75 入栈
// 索引 3, 温度 71 -> 入栈
// 索引 4, 温度 69 -> 入栈
// 索引 5, 温度 72 -> 69 出栈 (间隔 1), 71 出栈 (间隔 2), 72 入栈
// 索引 6, 温度 76 -> 72 出栈 (间隔 1), 75 出栈 (间隔 4), 76 入栈
// 索引 7, 温度 73 -> 入栈

