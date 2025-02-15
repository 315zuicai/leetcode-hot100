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
 * 25. K 个一组翻转链表
 * 
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，
 * 那么请将最后剩余的节点保持原有顺序。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 示例 1：
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 示例 2：
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 提示：
 * - 链表中的节点数目为 n
 * - 1 <= k <= n <= 5000
 * - 0 <= Node.val <= 1000
 * 
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k <= 1) return head;
    const dummy = new ListNode(0, head);
    // 上一组的终点
    let pre = dummy;

    while (true) {
        // 每组的起点
        let groupStart = pre.next;
        // 每组的终点，通过K去找终点，不足K，那就是结束了
        let groupEnd = pre;
        for (let i = 0; i < k; i++) {
            groupEnd = groupEnd.next!;
            if (!groupEnd) return dummy.next;
        }
        // 断开链接
        const nextGroupStart = groupEnd.next;
        groupEnd.next = null;

        const [reversedHead, reversedTail] = reverseList(groupStart);
        pre.next = reversedHead!;
        reversedTail!.next = nextGroupStart;

        pre = reversedTail!;
    }
}

/**
 * 辅助函数，将传入的list翻转，返回头和尾
 * @param head 反转的头节点
 * @returns 新头和新尾
 */
function reverseList(head: ListNode | null): [ListNode | null, ListNode | null] {
    let prev = null;
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return [prev, head];
}