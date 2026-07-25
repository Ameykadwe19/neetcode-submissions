class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let result = new Array(temperatures.length).fill(0);

        for (let index = 0; index < temperatures.length; index++) {
            while (stack.length && temperatures[index] > temperatures[stack[stack.length - 1]]) {
                let prevIndex = stack.pop();
                result[prevIndex] = index - prevIndex;
            }
            stack.push(index);
        }
        return result;
    }
}
