/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const Graph = require("../algorithms/graph");

describe("Breadth-First Search - BFS", function () {
    it("Should found closest name that starts with A on Graph of Michel's coworker network", function () {
        const graph = new Graph();
        graph.addVertex("you", ["alice", "bob", "claire"]);
        graph.addVertex("bob", ["anuj", "peggy"]);
        graph.addVertex("alice", ["peggy"]);
        graph.addVertex("claire", ["thom", "jonny"]);
        graph.addVertex("anuj", []);
        graph.addVertex("peggy", []);
        graph.addVertex("thom", []);
        graph.addVertex("jonny", []);

        const closest = graph.bfs(item => item.toLowerCase()[0] === "a");

        assert(closest === "alice", true);
    });

    it("Should not found closest name that starts with Y on Graph of Michel's coworker network", function () {
        const graph = new Graph();
        graph.addVertex("you", ["alice", "bob", "claire"]);
        graph.addVertex("bob", ["anuj", "peggy"]);
        graph.addVertex("alice", ["peggy"]);
        graph.addVertex("claire", ["thom", "jonny"]);
        graph.addVertex("anuj", []);
        graph.addVertex("peggy", []);
        graph.addVertex("thom", []);
        graph.addVertex("jonny", []);

        const closest = graph.bfs(item => item.toLowerCase()[0] === "a");

        assert(closest, false);
    });
});
