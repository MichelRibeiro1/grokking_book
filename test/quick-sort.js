/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const faker = require("faker");
const mock = require("./mock");
const quickSort = require("../algorithms/quick-sort");
const utils = require("./utils.js");

describe("Quick Sort", function () {
    it("Should sort array", function () {
        const length = faker.random.number({ min: 1000, max: 5000 });
        const arr = mock.generateUnsortedArray(length);

        const isSorted = utils.isArraySorted(quickSort(arr));

        assert.equal(isSorted, true);
    });
});
