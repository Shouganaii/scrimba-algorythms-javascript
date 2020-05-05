import { deepStrictEqual } from 'assert';
/*Função pra comparar cada item*/
let defaultCompare = (a, b) =>
    a > b ? 1 : (a < b ? -1 : 0);

let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    /*pegando a primeira posição do array*/
    let left = 0;
    /*pegando a ultima posição do array*/
    let right = array.length - 1;

    /*Enquanto a primeira posição for menor ou igual que a ultima*/
    while (left <= right) {
        /*Dividindo o array no "meio" */
        let middle = Math.floor((right + left) / 2);

        /*Usando nossa função de comparação       */
        switch (compare(element, array[middle])) {
            case -1: {
                right = middle - 1;
                break;
            }
            case 1: {
                left = middle + 1;
                break;
            }
            default: {
                return middle;
            }
        }
    }
    return -1;
};

deepStrictEqual(binarySearchWithLoops([], 2), -1);
deepStrictEqual(binarySearchWithLoops([1], 1), 0);
deepStrictEqual(binarySearchWithLoops([1], 2), -1);
deepStrictEqual(binarySearchWithLoops([1, 2, 3], 2), 1);
deepStrictEqual(binarySearchWithLoops([1, 2, 3], 3), 2);
deepStrictEqual(binarySearchWithLoops([1, 2, 3], 4), -1);
deepStrictEqual(binarySearchWithLoops([1, 2, 3, 7], 3), 2);