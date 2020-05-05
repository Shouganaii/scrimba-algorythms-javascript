
/*Função pra comparar cada item*/
let defaultCompare = (a, b) =>
    a > b ? 1 : (a < b ? -1 : 0);
/*Pre estabelecendo valores pro array
* Definindo a primeira e a última posição do array
*/
let binarySearchWithRecursion = (array, element, compare = defaultCompare, left = 0, right = array.length - 1) => {
    if (left > right) { return -1 }
    /*Define o valor da média entre a primeira e a última posição */
    const middle = Math.floor((right + left) / 2);
    /*E compara de acordo com o que a função compare retornar */
    const comparison = compare(element, array[middle]);

    return (
        comparison === -1 ?
            /*Se a comparison retornar -1,significa que podemos ativar a recursividade,chamando a própria função
            *E começando sua busca pelo valor setado por left,mas só indo até o meio do array original
            */
            binarySearchWithRecursion(array, element, compare, left, middle - 1)
            : comparison === 1 ?
                /*Caso contrário,significa que o nosso elemento não se encontra do meio do array para o começo
                *Então a busca pode começar do meio do array para o final
                */
                binarySearchWithRecursion(array, element, compare, middle + 1, right)
                :
                /*
                *E caso o elemento não satisfaça nenhuma das condições,ele está exatamente no meio do array
                */
                middle
    );
};