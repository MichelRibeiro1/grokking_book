const bfs = require("./bfs");

function Graph() {
    const inf = Infinity;
    this.vertices = {};

    this.addVertex = (name, edges) => {
        this.vertices[name] = edges;
    };

    this.bfs = target => bfs(this.vertices, target);
}

module.exports = Graph;
