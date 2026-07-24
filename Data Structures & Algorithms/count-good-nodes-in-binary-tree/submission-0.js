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
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;

        function nodes(node, maxsofar) {
            if (node === null) return;
            if (node.val >= maxsofar) {
                count++;
            }

            maxsofar = Math.max(node.val, maxsofar);
            let left = nodes(node.left, maxsofar);
            let right = nodes(node.right, maxsofar);
        }
        nodes(root, root.val);
        return count;
    }
}
