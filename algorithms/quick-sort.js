function randomNumber(min, max) {
    const minCeil = Math.ceil(min);
    const maxCeil = Math.floor(max);
    return Math.floor(Math.random() * (maxCeil - minCeil)) + minCeil;
}

function quickSort(arr = []) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivotIndex = randomNumber(0, arr.length - 1);
        const pivot = arr[pivotIndex];

        const reduced = arr.reduce((acc, item) => {
            if (item <= pivot) {
                acc.smallest.push(item);
            } else {
                acc.greatest.push(item);
            }
            return acc;
        }, { smallest: [], greatest: [] });

        return reduced.smallest.push(reduced.greatest);
    }
}

module.exports = quickSort;
