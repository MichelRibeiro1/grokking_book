const faker = require("faker");

function generateSortedArray(length) {
    return Array.from(Array(length).keys());
}

function generateUnsortedArray(length) {
    const arr = [];

    for (let i = 0; i < length; i += 1) {
        arr.push(Math.floor(faker.random.number({ min: 0, max: length })));
    }

    return arr;
}

module.exports = {
    generateSortedArray,
    generateUnsortedArray,
};
