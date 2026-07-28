class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let total = 0;

        for (let ops of operations) {
            if (ops === "+") {
                let score = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(score);
                total += score;
            } else if (ops === "C") {
                let removed = stack.pop();
                total -= removed;
            } else if (ops === "D") {
                let score = stack[stack.length - 1] * 2;
                stack.push(score);
                total += score;
            } else {
                let score = Number(ops);
                stack.push(score);
                total += score;
            }
        }

        return total;
    }
}
