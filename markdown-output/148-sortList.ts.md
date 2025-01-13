# 148-sortList.ts

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
 * 148. 排序链表
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 * 
 * 示例 1：
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 * 
 * 示例 2：
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
 * 
 * 示例 3：
 * Input: head = []
 * Output: []
 * 
 * 提示：
 * - 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * - -10^5 <= Node.val <= 10^5
 * 
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 */
// function sortList(head: ListNode | null): ListNode | null {
//     if (!head) return null;
//     const arr = [];
//     let cur: ListNode | null = head
//     while (cur) {
//         arr.push(cur.val);
//         cur = cur.next;
//     }
//     arr.sort((a, b) => a - b);
//     let dummy = new ListNode(0);
//     cur = dummy;
//     for (let i = 0; i < arr.length; i++) {
//         cur.next = new ListNode(arr[i]);
//         cur = cur.next;
//     }
//     return dummy.next;
// };

// // 自底向上归并排序
// function sortList(head: ListNode | null): ListNode | null {
//     if (!head || !head.next) return head;
//     let len = 0;
//     let cur: ListNode | null = head;
//     while (cur) {
//         len++;
//         cur = cur.next;
//     }

//     let dummy = new ListNode(0, head);
//     for (let size = 1; size < len; size *= 2) {
//         let tail = dummy;
//         let cur: ListNode | null = dummy.next;
//         while (cur) {
//             let left = cur;
//             let right = split(left, size);
//             cur = split(right, size);
//             tail = merge(left, right, tail);
//         }
//     }

//     return dummy.next;
// };

// function split(head: ListNode | null, size: number) {
//     let cur: ListNode | null = head;
//     for (let i = 1; i < size && cur; i++) {
//         cur = cur.next;
//     }
//     if (!cur) return null;
//     const next = cur.next;
//     cur.next = null;
//     return next;
// }

// function merge(l1: ListNode | null, l2: ListNode | null, tail: ListNode) {
//     let cur = tail;
//     while (l1 && l2) {
//         if (l1.val <= l2.val) {
//             cur.next = l1;
//             l1 = l1.next;
//         } else {
//             cur.next = l2;
//             l2 = l2.next;
//         }
//         cur = cur.next;
//     }
//     cur.next = l1 || l2;
    
//     while (cur.next) {
//         cur = cur.next;
//     }
//     return cur;
// }

// 自顶向下 递归 归并排序
function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const mid = findMid(head);
    const left = head;
    const right = mid.next;
    mid.next = null;

    const sortedLeft = sortList(left);
    const sortedRight = sortList(right);

    return merge(sortedLeft, sortedRight);
}

function findMid(head: ListNode): ListNode {
    let slow = head, fast = head.next;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    return slow;
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;

    return dummy.next;
}
```
