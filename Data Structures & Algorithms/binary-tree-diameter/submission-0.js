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
    diameterOfBinaryTree(root) {
        let ans = [];
        function height(node) {
            if (node === null) return 0;

            let leftS = height(node.left);
            let rightS = height(node.right);
            ans = Math.max(ans, leftS + rightS);
            return Math.max(leftS, rightS) + 1;
        }
        height(root);
        return ans;
    }
}
