class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let array = new Array(n);

        let leftProd = 1;
        for (let index = 0; index < n; index++) {
            array[index] = leftProd;
            leftProd = nums[index] * leftProd;
        }
        let rightProd = 1;
        for (let index = n -1; index >= 0; index--) {
            array[index] = rightProd * array[index];
            rightProd = nums[index] * rightProd;
        }
        return array;
    }
}
