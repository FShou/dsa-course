function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    seen: boolean[],
    needle: number,
    path: number[],
): boolean {
    if (seen[curr]) return false;

    // pre
    seen[curr] = true;
    path.push(curr);
    if (curr === needle) {
        return true;
    }

    // recurse
    const list = graph[curr];
    for (const edge of list) {
        if (walk(graph, edge.to, seen, needle, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    walk(graph, source, seen, needle, path);
    if (path.length === 0) {
        return null;
    }
    return path;
}
