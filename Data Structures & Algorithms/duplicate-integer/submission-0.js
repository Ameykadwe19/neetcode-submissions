class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for (let index = 0; index < nums.length; index++) {
            if (set.has(nums[index])) {
                return true;
            }
            set.add(nums[index]); 
            
        }
        return false
    }
}
