class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let ans = [];

        function helper(start, combin) {
            // Base Case
            if (combin.length === k) {
                ans.push([...combin]);
                return;
            }

            for (let num = start; num <= n; num++) {
                // Choose
                combin.push(num);

                // Explore
                helper(num + 1, combin);

                // Undo (Backtrack)
                combin.pop();
            }
        }

        helper(1, []);

        return ans;
    }
}
