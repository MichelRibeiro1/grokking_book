function binarySearch(arr, item, high, low = 0) {
    while (low <= high) {
        const middle = Math.floor((high + low) / 2);
        const guess = arr[middle];
        if (item === guess) {
            return guess;
        }
        if (guess < item) {
            return binarySearch(arr, item, high, middle + 1);
        }

        if (guess > item) {
            return binarySearch(arr, item, middle - 1, low);
        }
    }
    return -1;
}

module.exports = binarySearch;
