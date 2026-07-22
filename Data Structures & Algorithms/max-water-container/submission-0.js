class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftH = 0;
        let rightH = heights.length - 1;
        let maxArea = 0;

        while (leftH < rightH) {
            let area = Math.min(heights[leftH], heights[rightH]) * (rightH - leftH);
            maxArea = Math.max(area, maxArea);
            if (heights[leftH] < heights[rightH]) {
                leftH++;
            } else {
                rightH--;
            }
        }
        return maxArea;
    }
}
