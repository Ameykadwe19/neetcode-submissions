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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) return false;
        if (sameTree(root, subRoot)) {
            return true;
        }

        let leftT = this.isSubtree(root.left, subRoot);
        let rightT = this.isSubtree(root.right, subRoot);

        function sameTree(root, subRoot) {
            if (root === null && subRoot == null) {
                return true;
            }
            if (root === null || subRoot == null) {
                return false;
            }
            if (root.val !== subRoot.val) {
                return false;
            }
            return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right);
        }
        return leftT || rightT;
    }
}
