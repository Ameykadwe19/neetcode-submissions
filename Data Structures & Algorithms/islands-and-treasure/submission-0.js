class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let vis = Array.from({ length: rows }, () => Array(cols).fill(false));
        let queue = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    vis[r][c] = true;
                }
            }
        }

        while (queue.length) {
            let [r, c] = queue.shift();
            if (r - 1 >= 0 && !vis[r - 1][c] && grid[r - 1][c] === 2147483647) {
                grid[r - 1][c] = grid[r][c] + 1;
                queue.push([r - 1, c]);
                vis[r - 1][c] = true;
            }
            if (r + 1 < rows && !vis[r + 1][c] && grid[r + 1][c] === 2147483647) {
                grid[r + 1][c] = grid[r][c] + 1;
                queue.push([r + 1, c]);
                vis[r + 1][c] = true;
            }
            if (c - 1 >= 0 && !vis[r][c - 1] && grid[r][c - 1] === 2147483647) {
                grid[r][c - 1] = grid[r][c] + 1;
                queue.push([r, c - 1]);
                vis[r][c - 1] = true;
            }
            if (c + 1 < cols && !vis[r][c + 1] && grid[r][c + 1] === 2147483647) {
                grid[r][c + 1] = grid[r][c] + 1;
                queue.push([r, c + 1]);
                vis[r][c + 1] = true;
            }
        }
    }
}
