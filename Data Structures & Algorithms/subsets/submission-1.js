class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];

        function helper(index, subset) {
            if (index >= nums.length) {
                return ans.push([...subset]);
            }

            subset.push(nums[index]);
            helper(index + 1, subset);
            subset.pop();
            helper(index + 1, subset);
        }
        helper(0, []);
        return ans;
    }
}
