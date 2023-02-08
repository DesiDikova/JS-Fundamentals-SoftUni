// function oddAndEvenSum(num) {

//     let number = num.toString(); //превръщане на числото в стринг
//     let numberL = number.length;
//     let sumEven = 0;
//     let sumOdd = 0;

//     for (let i = 0; i < numberL; i++) {
//         let currentNum = (Number(number[i]));

//         //сумиране на всички четни числа
//         if (currentNum % 2 === 0) {
//             sumEven += currentNum;

//             //сумиране на всички нечетни числа  
//         } else {
//             sumOdd += currentNum
//         }
//     }

//     //отпечатване на резултата
//     console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

// }


// function oddAndEvenSum(num) {

//     let number = num.toString(); //превръщане на числото в стринг
//     let numberL = number.length;
//     let sumEven = getNumber(number);
//     let sumOdd = getNumber(number);

//     function getNumber(number) {
//         for (let i = 0; i < numberL; i++) {
//             let currentNum = (Number(number[i]));
//             if (currentNum % 2 === 0) {
//                 return sumEven += currentNum;  //сумиране на всички четни числа
//             } else {
//                 return sumOdd += currentNum;  //сумиране на всички нечетни числа
//             }
//         }
//     }

//     //отпечатване на резултата
//     console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);

// }

// oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);

function oddAndEvenSum(num) {

    let numberString = num.toString();
    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;
    for (let number of numberString) {
        if (Number(number) % 2 === 0) {
            sumEvenNumbers += Number(number);
        } else {
            sumOddNumbers += Number(number);
        }
    }

    let rez = `Odd sum = ${sumOddNumbers}, Even sum = ${sumEvenNumbers}`;
    return rez;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));