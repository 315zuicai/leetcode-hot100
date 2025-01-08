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
 * LeetCode 21. 合并两个有序链表
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例 1：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * 示例 2：
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * 示例 3：
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * 提示：
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按 非递减顺序 排列
 */

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     let pointer1: ListNode | null = list1, pointer2: ListNode | null = list2;
//     let resList = new ListNode();
//     let cur = resList;
//     while (pointer1 && pointer2) {
//         if (pointer1.val >= pointer2.val) {
//             cur.next = pointer2;
//             pointer2 = pointer2.next;
//         } else {
//             cur.next = pointer1;
//             pointer1 = pointer1.next;
//         }
//         cur = cur.next;
//     }
//     cur.next = pointer1 ?? pointer2;
//     return resList;
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val >= list2.val) {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    } else {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
};