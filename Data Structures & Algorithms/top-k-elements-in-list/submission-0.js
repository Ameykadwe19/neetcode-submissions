class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        let bucket = new Array(nums.length + 1).fill(0).map(() => []);

        for (let [num, freq] of map) {
            bucket[freq].push(num);
        }

        let ans = [];

        for (let index = bucket.length - 1; index >= 0 && ans.length < k; index--) {
            for (let num of bucket[index]) {
                ans.push(num);
                if (ans.length === k) return ans;
            }
        }
        return ans;
    }
}
