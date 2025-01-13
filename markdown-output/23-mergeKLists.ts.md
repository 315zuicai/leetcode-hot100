# 23-mergeKLists.ts

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
 * 23. 合并K个升序链表
 * 
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 示例 1：
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 将它们合并到一个有序链表中得到：
 * 1->1->2->3->4->4->5->6
 * 
 * 示例 2：
 * 输入：lists = []
 * 输出：[]
 * 
 * 示例 3：
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 提示：
 * - k == lists.length
 * - 0 <= k <= 10^4
 * - 0 <= lists[i].length <= 500
 * - -10^4 <= lists[i][j] <= 10^4
 * - lists[i] 按升序排列
 * - lists[i].length 的总和不超过 10^4
 */

// 分治法
// - 核心思想：
// 两两合并链表，类似归并排序。
// 每次将两个链表合并为一个，重复这一过程直到只剩一个链表。
// - 合并两个链表的过程：
// 使用双指针比较两个链表的当前节点，将较小的节点加入结果链表。
// 继续移动指针，直到一个链表为空，将剩余部分直接接到结果链表后。
// - 递归合并：
// 使用分治法将链表数组划分为左右两部分，分别递归合并。
// 最后合并左右两部分结果。
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     if (lists.length === 0) {
//         return null;
//     }

//     // 合并两个有序的链表
//     function mergeTwoList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//         let dummy = new ListNode(0);
//         let cur = dummy;

//         while (l1 && l2) {
//             if (l1.val > l2.val) {
//                 cur.next = l2;
//                 l2 = l2.next;
//             } else {
//                 cur.next = l1;
//                 l1 = l1.next;
//             }
//             cur = cur.next;
//         }

//         cur.next = l1 || l2;
//         return dummy.next;
//     }

//     // 分治合并
//     function merge(left: number, right: number): ListNode | null {
//         if (left === right) return lists[left];
//         const mid = Math.floor((left + right) / 2);
//         const l1 = merge(left, mid);
//         const l2 = merge(mid + 1, right);
//         return mergeTwoList(l1, l2);
//     }

//     return merge(0, lists.length - 1);
// };

// 小顶堆
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null;
    }

    const minHeap: Array<{val: number, node: ListNode | null}> = [];

    for (let list of lists) {
        if (list !== null) {
            minHeap.push({
                val: list.val,
                node: list,
            })
        }
    }

    const sortminHeap = () => {
        minHeap.sort((a, b) => a.val - b.val);
    }
    sortminHeap();

    let dummy = new ListNode(0);
    let cur = dummy;
    while (minHeap.length > 0) {
        const { node } = minHeap.shift()!;
        if (node !== null) {
            cur.next = node;
            cur = cur.next;

            // 如果 node.next 存在，则加入堆
            if (node.next !== null) {
                minHeap.push({ val: node.next.val, node: node.next });
                sortminHeap();
            }
        }
        
    }
    return dummy.next
};
```
