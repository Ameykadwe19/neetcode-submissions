class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let left = 0;
        let right = people.length - 1;
        let boats = 0;
        people.sort((a, b) => a - b);
        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                boats++;
                left++;
                right--;
            } else {
                boats++;
                right--;
            }
        }
        return boats;
    }
}
