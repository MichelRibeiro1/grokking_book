/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require("assert");
const faker = require("faker");
const mock = require("./mock");
const selectionSort = require("../algorithms/selection-sort");
const utils = require("./utils.js");

describe("Selection Sort", function () {
    it("Verify that array is sorted", function () {
        const length = faker.random.number({ min: 1000, max: 50000 });
        const arr = mock.generateSortedArray(length);

        assert.equal(utils.isArraySorted(arr), true);
    });

    it("Verify that array is NOT sorted", function () {
        const length = faker.random.number({ min: 1000, max: 50000 });
        const arr = mock.generateUnsortedArray(length);

        assert.equal(utils.isArraySorted(arr), false);
    });

    it("Should sort array", function () {
        const length = faker.random.number({ min: 1000, max: 5000 });
        const arr = mock.generateUnsortedArray(length);

        const isSorted = utils.isArraySorted(selectionSort(arr));

        assert.equal(isSorted, true);
    });
});
