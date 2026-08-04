class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxFreq = 0;
        let maxLength = 0;
        let left = 0;
        let map = new Map();
        for (let right = 0; right < s.length; right++) {
            let ch = s[right];
            map.set(ch, (map.get(ch) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(ch));
            while (right - left + 1 - maxFreq > k) {
                let leftChar = s[left];
                map.set(leftChar, map.get(leftChar) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
