function sum(arr = []) {
    if (arr.length === 0) {
        return 0;
    } else {
        const [head, ...tail] = arr;
        return head + sum(tail);
    }
}

function arrayLength(arr = []) {
    if (arr[0] === undefined) {
        return 0;
    } else {
        return 1 + arrayLength(arr.slice(1));
    }
}

module.exports = {
    sum,
    arrayLength,
};
