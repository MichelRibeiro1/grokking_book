/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const bfs = require("../algorithms/bfs");

describe("Breadth-First Search - BFS", function () {
    it("Should found closest name that starts with A on Graph of Michel's coworker network", function () {
        const graph = {};
        graph.you = ["alice", "bob", "claire"];
        graph.bob = ["anuj", "peggy"];
        graph.alice = ["peggy"];
        graph.claire = ["thom", "jonny"];
        graph.anuj = [];
        graph.peggy = [];
        graph.thom = [];
        graph.jonny = [];

        const closest = bfs(graph, item => item.toLowerCase()[0] === "a");

        assert(closest === "alice", true);
    });

    it("Should not found closest name that starts with Y on Graph of Michel's coworker network", function () {
        const graph = {};
        graph.you = ["alice", "bob", "claire"];
        graph.bob = ["anuj", "peggy"];
        graph.alice = ["peggy"];
        graph.claire = ["thom", "jonny"];
        graph.anuj = [];
        graph.peggy = [];
        graph.thom = [];
        graph.jonny = [];

        const closest = bfs(graph, item => item.toLowerCase()[0] === "a");

        assert(closest, false);
    });
});
