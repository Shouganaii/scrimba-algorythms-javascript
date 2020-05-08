/* Typical comparison function */
let defaultCompare = (a, b) =>
    a > b ? 1 : (a < b ? -1 : 0);

let binarySearchWithTailRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
    if (left > right) { return -1; }
    const middle = Math.floor((right + left) / 2);
    const comparison = compare(element, array[middle]);

    if (comparison === 0) { return middle; }

    const newBounds = comparison === -1
        ? [left, middle - 1]
        : [middle + 1, right];

    return binarySearchWithTailRecursion(array, element, compare, ...newBounds);
};

export default binarySearchWithTailRecursion;