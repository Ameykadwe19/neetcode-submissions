class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let m = grid.length;
        let n = grid[0].length;

        let vis = Array.from({ length: m }, () => Array(n).fill(false));

        let island = 0;

        function dfs(i, j) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0" || vis[i][j]) {
                return;
            }

            vis[i][j] = true;

            // up
            dfs(i - 1, j);

            // down
            dfs(i + 1, j);

            // left
            dfs(i, j - 1);

            // right
            dfs(i, j + 1);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === "1" && !vis[i][j]) {
                    island++;
                    dfs(i, j);
                }
            }
        }

        return island;
    }
}
