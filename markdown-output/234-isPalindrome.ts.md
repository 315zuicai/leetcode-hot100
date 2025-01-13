# 234-isPalindrome.ts

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

// function isPalindrome(head: ListNode | null): boolean {
//     if (!head) return false;
//     let res = [];
//     while (head) {
//         res.push(head.val);
//         head = head.next;
//     }
//     let left = res.join();
//     let right = res.reverse().join();
//     return left === right;
// };
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let cur: ListNode | null = head;
    let prev: ListNode | null = null;
    while (cur) {
        const next: ListNode | null = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // Step 1: Use fast and slow pointers to find the middle
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    let secondHalf = reverseList(slow);

    let firstHalfPointer = head;
    let secondHalfPointer = secondHalf;
    let palindrome = true;
    while (secondHalfPointer) {
        if (firstHalfPointer.val !== secondHalfPointer.val) {
            palindrome = false;
            break;
        }
        firstHalfPointer = firstHalfPointer.next!;
        secondHalfPointer = secondHalfPointer.next;
    }

    reverseList(secondHalf);

    return palindrome;
}

```
