/**
 * 17. 电话号码的字母组合 (Letter Combinations of a Phone Number)
 * 给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。
 * 电话按键的映射如下（与传统电话按键相同）：
 * 
 * 2 -> "abc"
 * 3 -> "def"
 * 4 -> "ghi"
 * 5 -> "jkl"
 * 6 -> "mno"
 * 7 -> "pqrs"
 * 8 -> "tuv"
 * 9 -> "wxyz"
 * 
 * 示例：
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 示例说明：
 * 数字 "2" 可以表示 "a", "b", "c"，数字 "3" 可以表示 "d", "e", "f"。所有可能的组合有 9 种。
 * 
 * 提示：
 * 1. `0 <= digits.length <= 4`
 * 2. `digits[i]` 是范围 ['2', '9'] 的一个数字。
 * 3. 输入可以为空。如果输入为空，返回空列表。
 */

function letterCombinations(digits: string): string[] {
    // 如果输入为空，直接返回空数组
    if (digits.length === 0) {
        return [];
    }
    // 电话按键的映射
    const phoneMap: { [key: string]: string } = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };

    const res: string[] = [];
    const curComb: string[] = [];

    function backtrack(index: number) {
        if (index === digits.length) {
            res.push(curComb.join(''));
            return;
        }

        const letters = phoneMap[digits[index]];
        for (let letter of letters) {
            curComb.push(letter);
            backtrack(index + 1);
            curComb.pop();
        }
    }
    backtrack(0);
    return res;
};
