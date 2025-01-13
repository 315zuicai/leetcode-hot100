# 138-copyRandomList.ts

```typescript
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

/**
 * 138. 随机链表的复制
 * 
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，
 * 该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的深拷贝。深拷贝应该正好由 n 个全新节点组成，其中每个新节点的值都设为其对应的原节点的值。
 * 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。
 * 复制链表中的指针都不应指向原链表中的节点。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。
 * 那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。
 * 
 * 返回复制链表的头节点。
 * 
 * 示例 1：
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 示例 2：
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 示例 3：
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 提示：
 * - 0 <= n <= 1000
 * - -10^4 <= Node.val <= 10^4
 * - Node.random 为 null 或指向链表中的节点
 */

class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}
function copyRandomList(head: _Node | null): _Node | null {
    if (!head) return head;

    let cur: _Node | null = head;
    // copy一个到当前节点的后面
    while (cur) {
        cur.next = new _Node(cur.val, cur.next!)
        cur = cur.next.next;
    }

    cur = head;
    // 处理random
    while (cur) {
        if (cur.random) {
            cur.next!.random = cur.random.next;
        }
        if (cur.next) {
            cur = cur.next.next;
        }
    }

    const newHead = head.next;
    cur = head;
    let newNode: _Node | null = newHead;

    // 抽出来
    while (cur) {
        cur.next = cur.next!.next;
        if (newNode!.next) {
            newNode!.next = newNode!.next.next;
        }
        cur = cur.next;
        newNode = newNode!.next;
    }
    return newHead;
};

```
