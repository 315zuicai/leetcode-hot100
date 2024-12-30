
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