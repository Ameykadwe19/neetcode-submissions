class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // indegree count
        let indegree = Array(numCourses).fill(0);
        let adj = Array.from({ length: numCourses }, () => []);
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
        let finish = 0;

        while (queue.length) {
            let node = queue.shift();
            finish++;
            for (let nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 0) {
                    queue.push(nei);
                }
            }
        }
        return finish === numCourses;
    }
}
