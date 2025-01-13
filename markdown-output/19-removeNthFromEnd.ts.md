# 19-removeNthFromEnd.ts

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 题目19：删除链表的倒数第 N 个结点
 * 
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * 示例：
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * 提示：
 * - 链表中结点的数目为 sz
 * - 1 <= sz <= 30
 * - 0 <= Node.val <= 100
 * - 1 <= n <= sz
 * 
 * 进阶：你能尝试使用一趟扫描实现吗？
 */
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     if (!head) return null;
//     let len = 0;
//     let cur: ListNode | null = head;
//     while (cur) {
//         cur = cur.next;
//         len++;
//     }
//     let diff = len - n;
//     if (diff === 0) {
//         return head.next;
//     }
//     cur = head;
//     while (diff > 1 && cur) {
//         cur = cur.next;
//         diff--;
//     }
//     if (cur?.next) {
//         const next = cur.next;
//         cur.next = next.next;
//     }
//     return head;
// };

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;
    let tempHead = new ListNode(0, head);
    let fast: ListNode | null = tempHead, slow: ListNode | null = tempHead;
    for (let i = 0; i <= n; i++) {
        fast = fast?.next || null;
    }

    while (fast) {
        fast = fast.next;
        slow = slow?.next || null;
    }

    if (slow && slow.next) {
        slow.next = slow.next.next;
    }

    return tempHead.next;
};
```
