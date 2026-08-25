/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers = function (l1, l2) {
        let ans = new ListNode(0);
        let curr = ans;

        let carry = 0;

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

            curr.next = new ListNode(sum % 10);
            carry = Math.floor(sum / 10);

            curr = curr.next;
        }

        return ans.next;
    };
}
