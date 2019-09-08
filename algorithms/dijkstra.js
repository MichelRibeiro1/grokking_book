function findSmallestCost(costs, processed) {
    let [smallestCost, smallestCostNode] = [Infinity, null];

    Object.keys(costs).forEach((key) => {
        const notProcessed = !processed[key];
        if (costs[key] < smallestCost && notProcessed) {
            [smallestCost, smallestCostNode] = [costs[key], key];
        }
    });
    return smallestCostNode;
}

function path(parents, start, finish) {
    const node = parents[finish];

    if (start === finish) {
        return `${start}`;
    }

    return `${finish} < ${path(parents, start, node)}`;
}

function dijkstras(graph, start, finish) {
    const vertices = Object.keys(graph);
    const [costs, parents, processed] = [{}, {}, {}];
    vertices.forEach((vertex) => {
        if (vertex !== start) {
            costs[vertex] = Number.MAX_SAFE_INTEGER;
            parents[vertex] = null;
        }
    });

    Object.keys(graph[start]).forEach((key) => {
        costs[key] = graph[start][key];
        parents[key] = start;
    });

    let node = findSmallestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        const neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor) => {
            const newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
                parents[neighbor] = node;
            }
        });
        processed[node] = true;
        node = findSmallestCost(costs, processed);
    }

    console.log(path(parents, start, finish));
}

module.exports = dijkstras;
