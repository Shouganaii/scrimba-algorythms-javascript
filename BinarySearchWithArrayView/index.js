let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
    if (array.length === 0) { return -1; }
    const middle = Math.floor(array.length / 2);
    const comparison = compare(element, array.get(middle));

    if (comparison === 0) { return middle; }

    const [left, right] = comparison === -1
        ? [0, middle - 1]
        : [middle + 1, array.length];

    const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element, compare);

    return subIndex === -1
        ? -1
        : left + subIndex;
};

export let ArrayView = (
    array,
    start = 0,
    end = array.length,
) => ({
    length: end - start,
    toArray: () => array.slice(start, end),
    slice: (dStart, dEnd) =>
        ArrayView(array, start + dStart, start + dEnd),
    get: (index) => {
        let realIndex = start + index;
        return realIndex < end && realIndex >= start
            ? array[realIndex]
            : undefined
            ;
    },
});

let binarySearchWithArrayView = (array, ...args) =>
    binarySearchWithArraySplitting(ArrayView(array), ...args)

export default binarySearchWithArrayView;