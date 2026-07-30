class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        let ans = [];

        function helper(index, subsets) {
            if (index === nums.length) {
                ans.push([...subsets]);
                return;
            }

            subsets.push(nums[index]);

            helper(index + 1, subsets);

            subsets.pop();
            index = index + 1;

            while (nums[index] === nums[index - 1] && index < nums.length) {
                index++;
            }
            helper(index, subsets);
        }

        helper(0, []);
        return ans;
    }
}
