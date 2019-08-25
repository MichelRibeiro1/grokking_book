/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const faker = require("faker");
const mock = require("./mock");
const binarySearch = require("../algorithms/binary-search");

describe("Binary Search", function () {
    it("Should found item on that array. Return must be the searched number", function () {
        const length = faker.random.number({ min: 1000, max: 50000 });
        const arr = mock.generateSortedArray(length);

        const item = arr[faker.random.number({ min: 0, max: length - 1 })];

        assert.equal(binarySearch(arr, item, length - 1, 0), item);
    });

    it("Should not found item on that array. Return must be -1", function () {
        const length = faker.random.number({ min: 1000, max: 50000 });
        const arr = mock.generateSortedArray(length);

        const item = faker.random.number({ min: -1000, max: 0 });

        assert.equal(binarySearch(arr, item, length - 1, 0), -1);
    });

});
