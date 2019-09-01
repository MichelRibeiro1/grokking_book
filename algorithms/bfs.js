function bfs(graph, target) {
    const [checkedItems, queue] = [{}, Object.keys(graph)];

    while (queue.length) {
        const vertex = queue.shift();
        const alreadyChecked = !!checkedItems[vertex];
        if (!alreadyChecked) {
            let response;

            if (typeof target === "function") {
                response = target(vertex);
            } else {
                response = target === vertex;
            }

            if (response) {
                return vertex;
            } else {
                const neighbors = graph[vertex];
                queue.push.apply(queue, neighbors);
            }

            checkedItems[vertex] = true;
        }
    }
    return false;
}

module.exports = bfs;
