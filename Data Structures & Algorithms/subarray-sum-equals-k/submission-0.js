class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();

        map.set(0, 1);
        let sum = 0;
        let count = 0;
        for (let index = 0; index < nums.length; index++) {
            sum += nums[index];
            if (map.has(sum - k)) {
                count += map.get(sum - k);
            }
            map.set(sum, (map.get(sum) || 0) + 1);
        }
        return count;
    }
}
