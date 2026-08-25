class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @param {number[][]} queries
     * @return {boolean[]}
     */
    checkIfPrerequisite(numCourses, prerequisites, queries) {
        let adj = Array.from({ length: numCourses }, () => []);
        let indegree = Array(numCourses).fill(0);
        let prereq = Array.from({ length: numCourses }, () => new Set());

        for (let [src, dst] of prerequisites) {
            adj[src].push(dst);
            indegree[dst]++;
        }
        let queue = [];
        for (let index = 0; index < numCourses; index++) {
            if (indegree[index] === 0) {
                queue.push(index);
            }
        }

        while (queue.length) {
            let node = queue.shift();

            for (let nei of adj[node]) {
                prereq[nei].add(node);

                for (let p of prereq[node]) {
                    prereq[nei].add(p);
                }
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }
        let ans = []
        for (let [u, v] of queries) {
            ans.push(prereq[v].has(u));
        }
        return ans;
    }
}
