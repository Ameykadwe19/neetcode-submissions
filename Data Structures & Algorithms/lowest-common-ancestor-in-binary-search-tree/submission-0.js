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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function lca(node) {
            if (node === null) return null;

            if(node === p || node === q){
                return node
            }

            let leftLca = lca(node.left, p, q);
            let rightLca = lca(node.right, p, q);

            if (leftLca && rightLca) {
                return node;
            } else if (leftLca === null) {
                return rightLca;
            } else {
                return leftLca;
            }
        }

        return lca(root);
    }
}
