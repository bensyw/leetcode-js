/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // Create a dummy node
    let dummy = new ListNode()
    dummy.next = head
    let previous = dummy
    while (head != null && head.next != null) {
        // Swapping nodes
        let second = head.next;
        // head.next = second.next
        // second.next = head
        // previous.next = second
        [head.next, second.next, previous.next] = [second.next, head, second]
        // Move forward
        previous = head
        head = head.next
    }
    return dummy.next
};