class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let result = "";
        let left1 = 0;
        let left2 = 0;

        while (left1 < word1.length && left2 < word2.length) {
            result += word1[left1];
            left1++;
            result += word2[left2];
            left2++;
        }

        while (left1 < word1.length) {
            result += word1[left1];
            left1++;
        }

        while (left2 < word2.length) {
            result += word2[left2];
            left2++;
        }
        return result
    }
}
