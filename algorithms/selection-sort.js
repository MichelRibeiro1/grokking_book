
const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i += 1) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

const selectionSort = (arr) => {
    if (!arr.length) {
        return [];
    }
    const smallest = arr.splice(findSmallest(arr), 1);
    return smallest.concat(selectionSort(arr));
};

module.exports = selectionSort;
