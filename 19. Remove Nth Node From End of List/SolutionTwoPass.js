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
    // Traverse to the end to find the length
    let first = head
    let length = 0
    while (first) {
        length++;
        first = first.next
    }
    // Find the index for the Nth node from the end
    length -= n
    first = dummy
    // Traverse to the end to find the index
    while (length > 0) {
        length--;
        first = first.next
    }
    // Remove the node and return the new list
    first.next = first.next.next
    return dummy.next
};