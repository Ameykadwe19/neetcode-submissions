class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = [];

        function helper(index, combination, target) {
            if (target === 0) {
                ans.push([...combination]);
                return
            }

            if (index === nums.length || target < 0) {
                return;
            }

            combination.push(nums[index]);

            helper(index, combination, target - nums[index]);

            combination.pop();

            helper(index + 1, combination, target);
        }
        helper(0, [], target);
        return ans
    }
}
