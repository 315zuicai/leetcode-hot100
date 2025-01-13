/**
 * 请你设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。
 *
 * 实现 LRUCache 类：
 * - LRUCache(int capacity) - 以正整数作为容量 capacity 初始化 LRU 缓存
 * - int get(int key) - 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1
 * - void put(int key, int value) - 如果关键字 key 已经存在，则变更其值；
 *   如果不存在，则向缓存中插入该组 key-value。
 *   如果插入操作导致关键字数量超过 capacity，则应该逐出最久未使用的关键字。
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 示例：
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 提示：
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 105
 * 最多调用 2 * 105 次 get 和 put 方法
 */

// class LRUCache {
//     capacity: number;
//     cache: Map<number, number>;
//     constructor(capacity: number) {
//         this.capacity = capacity
//         this.cache = new Map();
//     }

//     get(key: number): number {
//         if (this.cache.has(key)) {
//             const val = this.cache.get(key)!;
//             // 更新
//             this.cache.delete(key);
//             this.cache.set(key, val);
//             return val;
//         }
//         return -1;
//     }

//     put(key: number, value: number): void {
//         if (this.cache.has(key)) {
//             this.cache.set(key, value);
//         }
//         if (this.cache.size >= this.capacity) {
//             // 删除第一个
//             const oldKey = this.cache.keys().next().value;
//             this.cache.delete(oldKey);
//         }
//         this.cache.set(key, value);
//     }
// }


// 哈希和双向链表
class DoublyLinkedNode {
    key: number;
    val: number;
    prev: DoublyLinkedNode | null;
    next: DoublyLinkedNode | null;

    constructor(key: number, val: number, prev?: DoublyLinkedNode | null, next?: DoublyLinkedNode | null) {
        this.key = key;
        this.val = val;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}

class LRUCache {
    capacity: number;
    cache: Map<number, DoublyLinkedNode>;
    head: DoublyLinkedNode;
    tail: DoublyLinkedNode;



    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new DoublyLinkedNode(0, 0);
        this.tail = new DoublyLinkedNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            // 移动该节点到链表头部
            const node = this.cache.get(key)!;
            this.moveToHead(node);
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.val = value;
            this.moveToHead(node);
        } else {
            const newNode = new DoublyLinkedNode(key, value);
            this.cache.set(key, newNode);
            this.addNode(newNode);
            // 删除旧的
            if (this.cache.size > this.capacity) {
                const tailNode = this.removeTail();
                this.cache.delete(tailNode.key);
            }
        }
    }

    // 将节点移到链表头部
    private moveToHead(node: DoublyLinkedNode): void {
        this.removeNode(node);
        this.addNode(node);
    }

    // 从链表中移除节点
    private removeNode(node: DoublyLinkedNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    // 节点移动到头部
    private addNode(node: DoublyLinkedNode): void {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    // 移除并返回链表尾部的节点
    private removeTail(): DoublyLinkedNode {
        const res = this.tail.prev!;
        this.removeNode(res);
        return res;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * 示例用法：
 * const lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * console.log(lRUCache.get(1)); // 返回 1
 * lRUCache.put(3, 3); // 缓存是 {3=3, 1=1}，移除最久未使用的 2
 * console.log(lRUCache.get(2)); // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 缓存是 {4=4, 3=3}，移除最久未使用的 1
 * console.log(lRUCache.get(1)); // 返回 -1 (未找到)
 * console.log(lRUCache.get(3)); // 返回 3
 * console.log(lRUCache.get(4)); // 返回 4
 */


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */