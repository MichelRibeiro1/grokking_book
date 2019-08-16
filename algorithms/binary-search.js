function binarySearch(list, item) {
    const [low, high] = [0, list.length];
    const middle = Math.floor(list.length / 2);

    if (item === list[middle]) {
        return list[middle];
    }
    if (list.length === 0) {
        return null;
    }
    if (item > middle) {
        return binarySearch(list.slice(middle + 1, high), item);
    }
    return binarySearch(list.slice(low, middle), item);
}

module.exports = binarySearch;
