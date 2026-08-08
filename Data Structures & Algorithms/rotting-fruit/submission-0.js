class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let rows = grid.length;
        let cols = grid[0].length;

        let vis = Array.from({ length: rows }, () => Array(cols).fill(false));
        let queue = [];
        let ans = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j, 0]);
                    vis[i][j] = true;
                }
            }
        }

        while (queue.length) {
            let [i, j, time] = queue.shift();
            ans = Math.max(ans, time);
            if (i - 1 >= 0 && !vis[i - 1][j] && grid[i - 1][j] === 1) {
                queue.push([i - 1, j, time + 1]);
                vis[i - 1][j] = true;
            }
            if (i + 1 < rows && !vis[i + 1][j] && grid[i + 1][j] === 1) {
                queue.push([i + 1, j, time + 1]);
                vis[i + 1][j] = true;
            }
            if (j - 1 >= 0 && !vis[i][j - 1] && grid[i][j - 1] === 1) {
                queue.push([i, j - 1, time + 1]);
                vis[i][j - 1] = true;
            }
            if (j + 1 < cols && !vis[i][j + 1] && grid[i][j + 1] === 1) {
                queue.push([i, j + 1, time + 1]);
                vis[i][j + 1] = true;
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !vis[i][j]) {
                    return -1;
                }
            }
        }
        return ans;
    }
}
