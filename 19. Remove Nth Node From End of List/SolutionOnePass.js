/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // Create a dummy node
    let dummy = new ListNode()
    dummy.next = head
    // Create two pointers
    first = dummy
    second = dummy
    // Traverse to the Nth node from the start
    for (let i = 0; i <= n; i++) {
        first = first.next
    }
    // Move the first to the end
    while (first) {
        first = first.next
        second = second.next
    }
    // Remove the Nth node from the end
    second.next = second.next.next
    return dummy.next
};