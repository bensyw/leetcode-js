/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    l3 = new ListNode()
    head = l3
    carry = 0

    while (l1 || l2) {

        if (l1) {
            l1Value = l1.val
            l1 = l1.next
        } else {
            l1Value = 0
        }

        if (l2) {
            l2Value = l2.val
            l2 = l2.next
        } else {
            l2Value = 0
        }

        sum = l1Value + l2Value + carry
        carry = Math.floor(sum / 10)
        digit = sum % 10

        l3.next = new ListNode(digit)
        l3 = l3.next
    }

    l3.next = carry ? new ListNode(carry) : null
    return head.next
};