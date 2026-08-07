class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let ans = [];
        let visited = new Array(nums.length).fill(false);

        function helper(path) {
            if (path.length === nums.length) {
                ans.push([...path]);
                return;
            }

            for (let index = 0; index < nums.length; index++) {
                if (visited[index]) {
                    continue;
                }
                visited[index] = true;
                path.push(nums[index]);

                helper(path, visited);

                path.pop();
                visited[index] = false;
            }
        }
        helper([]);
        return ans;
    }
}
