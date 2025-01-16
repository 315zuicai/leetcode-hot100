/**
 * 207. 课程表
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 在选修某些课程之前需要一些先修课程。先修课程按数组 prerequisites 给出，
 * 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则必须先学习课程 bi 。
 * 请你判断是否可能完成所有课程的学习？
 * 
 * 示例 1：
 * 输入：numCourses = 2, prerequisites = [[1,0]]
 * 输出：true
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。所以这是可能的。
 * 
 * 示例 2：
 * 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
 * 输出：false
 * 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成课程 0；并且学习课程 0 之前，你还需要先完成课程 1。这是不可能的。
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Step 1: 初始化入度数组和邻接表
    const inDegree: number[] = new Array(numCourses).fill(0);
    const graph: Map<number, number[]> = new Map();

    for (const [course, pre] of prerequisites) {
        inDegree[course]++;
        if (!graph.has(pre)) graph.set(pre, []);
        graph.get(pre)!.push(course);
    }

    // Step 2: 初始化队列，将所有入度为 0 的课程加入队列
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // Step 3: 拓扑排序
    let completedCourses = 0;
    while (queue.length > 0) {
        const current = queue.shift()!;
        completedCourses++;

        // 遍历当前课程的后续课程
        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }

    // Step 4: 判断结果
    return completedCourses === numCourses;
}
