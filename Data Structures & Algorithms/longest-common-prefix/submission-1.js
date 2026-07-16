class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs.length) return "";
        let ans = "";

        for (let index = 0; index < strs[0].length; index++) {
            for (let indexJ = 1; indexJ < strs.length; indexJ++) {
                if (index >= strs[indexJ].length || strs[indexJ][index] !== strs[0][index]) {
                    return ans;
                }
            }
            ans += strs[0][index];
        }
        return ans
    }
}
