/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null || q === null) {
            return p === q;
        }
        let left = this.isSameTree(p.left, q.left);
        let right = this.isSameTree(p.right, q.right);
        return left && right && p.val === q.val;
    }
}
