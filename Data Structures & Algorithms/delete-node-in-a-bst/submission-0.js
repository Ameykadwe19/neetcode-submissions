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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            if (root.left === null) {
                return root.right;
            }
            if (root.right === null) {
                return root.left;
            }

            let temp = root.right

            while(temp.left != null){
                temp =temp.left
            }
            root.val = temp.val

            root.right = this.deleteNode(root.right, temp.val);
        }
        return root
    }
}
