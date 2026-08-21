class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adj = Array.from({ length: n }, () => []);
        let vis = new Array(n).fill(false);
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        function dfs(node, parent) {
            vis[node] = true;
            for (let nei of adj[node]) {
                if (!vis[nei]) {
                    if (dfs(nei, node)) {
                        return true;
                    }
                } else if (nei !== parent) {
                    return true;
                }
            }
            return false;
        }

         function hasCycle() {
            return dfs(0, -1);
        }
         if (hasCycle()) return false;

        for (let i = 0; i < n; i++) {
            if (!vis[i]) return false;
        }

        return true;
    }
}
