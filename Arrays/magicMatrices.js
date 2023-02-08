// function magicMatrices(firstArray, secondArray, thirdArray) {
    
//     let firstArrayL = firstArray.length;
//     let sumFirstArray = 0;
//     let sumSecondArray = 0;
//     let sumThirdArray = 0;


//     for (let i = 0; i < firstArrayL; i++) {
//         let firstElement = firstArray[i];
//         let secondElement = secondArray[i];
//         let thirdElement = thirdArray[i];

//         sumFirstArray += firstElement;

//     }
//     console.log(sumFirstArray);
// }

function solve(matrix) {
    const reduce = (prev, curr) => prev + curr;
    let sum = matrix[0].reduce(reduce);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce(reduce);
        if (rowSum !== sum) {
            return false;
        }
        if (row === 0) {
            for (let col = 0; col < matrix[row].length; col++) {
                let columSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    columSum += matrix[col][i];
                }
                if (columSum !== sum) {
                    return false;
                }
            }
        }
    }
    return true;
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);