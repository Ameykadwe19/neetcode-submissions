class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = Array.from({ length: n }, () => []);

        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let vis = new Array(adj.length).fill(false);
        let count = 0;

        function helper(node) {
            vis[node] = true;

            for (let nei of adj[node]) {
                if (!vis[nei]) {
                    helper(nei);
                }
            }
        }

        for (let index = 0; index < n; index++) {
            if (!vis[index]) {
                count++;
                helper(index);
            }
        }
        return count;
    }
}
