/**
 * 22. 括号生成 (Generate Parentheses)
 * 给定一个数字 `n`，编写一个函数，生成所有由 `n` 对括号组成的合法括号组合。
 * 
 * 合法括号组合需要满足：对于任意一个前缀，其左括号数量都不小于右括号数量。
 * 
 * 示例 1：
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 示例 2：
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 提示：
 * 1. `1 <= n <= 8`
 */

// const generateParenthesis = (n: number): string[] => {
//     let set: Set<string> = new Set(['()']); // 初始化包含一个括号对的集合

//     for (let c = 2; c <= n; c++) {
//         const nextSet: Set<string> = new Set(); // 用于存储新一轮的括号组合

//         for (const s of set) {
//             // 遍历当前集合中的所有字符串
//             for (let j = 0; j <= s.length; j++) {
//                 // 在当前字符串的每一个位置插入一对括号
//                 nextSet.add(s.slice(0, j) + '()' + s.slice(j));
//             }
//         }

//         set = nextSet; // 更新集合为新一轮生成的结果
//     }

//     return [...set]; // 将 Set 转换为数组并返回
// };


function generateParenthesis(n: number): string[] {
    const res: string[] = [];

    function backtrack(cur: string, open: number, close: number) {
        if (cur.length === n * 2) {
            res.push(cur);
            return;
        }
        if (open < n) {
            backtrack(cur + "(", open + 1, close);
        }
        if (close < open) {
            backtrack(cur + ")", open, close + 1);
        }
    }
    backtrack("", 0, 0);
    return res;
}
