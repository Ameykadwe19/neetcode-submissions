class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let r = grid.length;
        let c = grid[0].length;

        function dfs(row, col) {
            if (row < 0 || row >= r || col < 0 || col >= c || grid[row][col] === 0) {
                return 0;
            }
            grid[row][col] = 0;
            let count = 1;
           count+= dfs(row - 1, col);
           count+=  dfs(row + 1, col);
           count+=  dfs(row, col - 1);
           count+=  dfs(row, col + 1);
           return count
        }
        let maxx = 0;
        for (let row = 0; row < r; row++) {
            for (let col = 0; col < c; col++) {
                if(grid[row][col] === 1){
                let count = dfs(row,col)
                maxx = Math.max(maxx, count);
                }
            }
        }
        return maxx
    }
}
