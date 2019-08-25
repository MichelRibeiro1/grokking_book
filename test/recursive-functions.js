/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const faker = require("faker");
const mock = require("./mock");
const funcs = require("../algorithms/recursive-functions");

describe("Recursive functions", function () {
    it("Should sum items on array correctly", function () {
        const length = faker.random.number({ min: 1000, max: 9000 });
        const arr = mock.generateUnsortedArray(length);

        assert.equal(funcs.sum(arr), arr.reduce((acc, i) => acc + i, 0));
    });

    it("Should count items on array correctly", function () {
        const length = faker.random.number({ min: 1000, max: 9000 });
        const arr = mock.generateUnsortedArray(length);

        assert.equal(funcs.arrayLength(arr), length);
    });
});
