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
    if (!head || k <= 1) return head; // 特殊情况：空链表或不需要翻转

    const dummy = new ListNode(0, head); // 虚拟头节点
    let prevGroupEnd = dummy; // 记录上一组的末尾，用于连接翻转后的部分

    while (true) {
        // 检查当前组是否有足够的节点进行翻转
        let groupStart = prevGroupEnd.next!; // 当前组的起点
        let groupEnd = prevGroupEnd; 
        for (let i = 0; i < k; i++) {
            groupEnd = groupEnd.next!;
            if (!groupEnd) return dummy.next; // 不足 k 个节点，返回结果
        }

        // 记录下一组的起点
        let nextGroupStart = groupEnd.next;
        groupEnd.next = null; // 断开当前组与后续链表的连接

        // 翻转当前组
        let [reversedHead, reversedTail] = reverseList(groupStart);

        // 连接翻转后的部分到主链表
        prevGroupEnd.next = reversedHead!;
        reversedTail!.next = nextGroupStart;

        // 更新 prevGroupEnd 为当前组的尾部（翻转后的）
        prevGroupEnd = reversedTail!;
    }
}

// 辅助函数：翻转链表并返回新的头和尾
function reverseList(head: ListNode | null): [ListNode | null, ListNode | null] {
    let prev = null;
    let current = head;
    while (current) {
        const next = current.next; // 暂存下一节点
        current.next = prev;      // 翻转当前节点
        prev = current;           // 移动 prev 指针
        current = next;           // 移动 current 指针
    }
    return [prev, head]; // 返回新的头节点和尾节点
}
