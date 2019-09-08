const bfs = require("./bfs");
const dijkstras = require("./dijkstra");

function Graph() {
    this.vertices = {};

    this.addVertex = (name, edges) => {
        this.vertices[name] = edges;
    };

    this.bfs = target => bfs(this.vertices, target);

    this.dijkstras = target => dijkstras(this.vertices, target);
}

module.exports = Graph;
