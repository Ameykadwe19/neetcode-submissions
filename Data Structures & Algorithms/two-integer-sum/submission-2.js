class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let index = 0; index < nums.length; index++) {
            let need = target - nums[index];
            if (map.has(need)) {
                return [map.get(need), index]
            }
            map.set(nums[index],index)
        }
        return []
    }
}
