const isArraySorted = (arr) => {
    if (!arr.length || arr.length === 1) return true;

    let res = true;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > arr[i + 1]) {
            res = false;
            break;
        }
    }

    return res;
};

module.exports = {
    isArraySorted,
};
