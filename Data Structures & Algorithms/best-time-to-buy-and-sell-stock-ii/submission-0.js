class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        for (let index = 0; index < prices.length; index++) {
            if (prices[index + 1] > prices[index]) {
                profit = profit + (prices[index + 1] - prices[index]);
            }
        }
        return profit
    }
}
