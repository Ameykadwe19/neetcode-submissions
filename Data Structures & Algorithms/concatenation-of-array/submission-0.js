class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let ans = new Array(2 * n);
        for (let index = 0; index < n; index++) {
            ans[index] = nums[index];
            ans[index + n] = nums[index];
        }
        return ans
    }
}