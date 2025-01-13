# 2-addTwoNumbers.ts

```typescript
/**
 * LeetCode 第2题 - 两数相加
 * 
 * 给你两个非空的链表，表示两个非负的整数。
 * 它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 示例：
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807
 * 
 * 提示：
 * - 每个链表中的节点数在范围 [1, 100] 内
 * - 0 <= Node.val <= 9
 * - 题目数据保证列表表示的数字不含前导零
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function buildList(arr: number[]) {
    const head = new ListNode(0, null);
    let cur = head;
    for (let item of arr) {
        cur.next = new ListNode(item, null);
        cur = cur.next;
    }
    return head.next;
}

function List2Arr(head: ListNode | null): number[] {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode(0, null);
    let carry = 0;
    let cur = head;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10, null);
        cur = cur.next;
    }
    return head.next;
}

const a = [9, 9, 9, 9, 9, 9, 9];
const b = [9, 9, 9, 9];
const c = [8, 9, 9, 9, 0, 0, 0, 1];

function areArraysEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


console.log(areArraysEqual(
    List2Arr(
        addTwoNumbers(
            buildList(a),
            buildList(b)
        )
    ),
    c
));
```
