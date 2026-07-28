class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let profit = 0;
        let maxProfit = 0;
        for (let right = 0; right < prices.length; right++) {
            if (prices[left] > prices[right]) {
                left = right;
            }
            profit = prices[right] - prices[left];
            maxProfit = Math.max(profit, maxProfit)
        }
        return maxProfit
    }
}
