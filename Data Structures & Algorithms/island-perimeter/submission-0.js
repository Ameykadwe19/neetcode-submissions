class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let perimeter = 0;

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (grid[r][c] === 1) {
                    perimeter += 4;
                    if (r > 0 && grid[r - 1][c] === 1) {
                        perimeter -= 2;
                    }
                    if (c > 0 && grid[r][c - 1] === 1) {
                        perimeter -= 2;
                    }
                }
            }
        }
        return perimeter;
    }
}
