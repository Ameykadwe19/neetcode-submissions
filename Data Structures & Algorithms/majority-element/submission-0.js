class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let candidate = 0;
        let count = 0;
        for(let index = 0 ; index < nums.length; index++){
            if(count === 0){
                candidate = nums[index]
                count++
            }else if (candidate === nums[index]){
                count++
            }else{
                count--
            }
        }
        return candidate
    }
    // Boyer–Moore Voting Algorithm
}
