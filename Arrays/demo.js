// function sumFirstAndLastArrayElements(array) {

//     let firstElement = array[0];
//     let lastElenet = array[array.length - 1];

//     console.log(firstElement + lastElenet);

// }

// sumFirstAndLastArrayElements([20, 30, 40]);
// sumFirstAndLastArrayElements([10, 17, 22, 33]);
// sumFirstAndLastArrayElements([11, 58, 69]);

// function dayOfWeek(num) {

//     let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     if (num >= 1 && num <= 7) {
//         console.log(days[num - 1]);
//     } else {
//         console.log('Invalid day!');
//     }
// }

// dayOfWeek(3);
// dayOfWeek(6);
// dayOfWeek(11);


// function reverseAnArrayOfNumbers(num, array) {

//     let newArray = [];
//     let newArrayReverse;

//     for (let i = 0; i < num; i++) {
//         newArray.push(array[i]);
//     }
//     newArrayReverse = newArray.reverse();

//     console.log(newArrayReverse.join(' '));

// }

// reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);


// function reverseInPlace(array) {

//     let reverseArray = array.reverse();
//     console.log(reverseArray.join(' '));
// }

// reverseInPlace(['a', 'b', 'c', 'd', 'e']);
// reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// reverseInPlace(['33', '123', '0', 'dd']);


// function sumEvenNumbers(array) {

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (Number(array[i]) % 2 === 0) {
//             sum += Number(array[i]);
//         }
//     }

//     console.log(sum);
// }

// sumEvenNumbers(['1','2','3','4','5','6']);
// sumEvenNumbers(['3','5','7','9']);
// sumEvenNumbers(['2','4','6','8','10']);


// function evenAndOddSubtraction(array) {

//     let lengthArray = array.length;
//     let sumEven = 0;
//     let sumOdd = 0;

//     for (let i = 0; i < lengthArray; i++) {
//         if (array[i] % 2 === 0) {
//             sumEven += array[i];
//         } else {
//             sumOdd += array[i];
//         }
//     }

//     console.log(sumEven - sumOdd);

// }

// evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
// evenAndOddSubtraction([3,5,7,9]);
// evenAndOddSubtraction([2,4,6,8,10]);


// function equalArrays(firstArray, secondArray) {

//     let lengthFirstArray = firstArray.length;
//     let sum = 0;
//     let index = 0;

//     for (let i = 0; i < lengthFirstArray; i++) {
//         for (let j = i; j <= i; j++) {
//             if (firstArray[i] === secondArray[i]) {
//                 sum += Number(firstArray[i]);
//             } else {
//                 console.log(`Arrays are not identical. Found difference at ${index} index`);
//                 return;
//             }
//         }
//         index++;
//     }

//     console.log(`Arrays are identical. Sum: ${sum}`)

// }

// equalArrays(['10', '20', '30'], ['10', '20', '30']);
// equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
// equalArrays(['1'], ['10']);


// function condenseArrayToNumber(array) {

//     let sum = 0;

//     while (array.length > 1) {
//         let newArray = [];
//         for (let i = 0; i < array.length - 1; i++) {
//             sum = array[i] + array[i + 1];
//             newArray.push(sum);
//         }
//         array = newArray
//     }
//     console.log(array.join());
// }

// condenseArrayToNumber([2, 10, 3]);
// condenseArrayToNumber([5, 0, 4, 1, 2]);
// condenseArrayToNumber([1]);


// function addAndSubtract(array) {

//     let lengthArray = array.length;
//     let newArray = [];
//     let sumNumbersArray = 0;
//     let sumNumbersNewArray = 0;

//     for (let i = 0; i < lengthArray; i++) {
//         let num = array[i];
//         sumNumbersArray += num;
//         if (num % 2 === 0) {
//             num += i;
//         } else {
//             num -= i;
//         }
//         newArray.push(num);
//         sumNumbersNewArray += num;
//     }

//     console.log(newArray);
//     console.log(sumNumbersArray);
//     console.log(sumNumbersNewArray);

// }

// addAndSubtract([5, 15, 23, 56, 35]);
// addAndSubtract([-5, 11, 3, 0, 2]);


// function commonElements(firstArray, secondArray) {

//     let firstArrayL = firstArray.length;
//     let secondArrayL = secondArray.length;

//     for (let i = 0; i < firstArrayL; i++) {
//         let elementfirstArray = firstArray[i];
//         for (let j = 0; j < secondArrayL; j++) {
//             let elementsecondArray = secondArray[j];
//             if (elementfirstArray === elementsecondArray) {
//     console.log(elementfirstArray);
// }
//         }
//     }
// }

// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);


// function commonElements(firstArray, secondArray) {

//     let firstArrayL = firstArray.length;

//     for (let i = 0; i < firstArrayL; i++) {
//         let elementFirstArray = firstArray[i];
//         if (firstArray.includes(elementFirstArray) === secondArray.includes(elementFirstArray)) {
//             console.log(elementFirstArray);
//         }
//     }
// }

// commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
// commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);


// function mergeArrays(firstArray, secondArray) {

//     let firstArrayL = firstArray.length;
//     let thirdArray = [];

//     for (let i = 0; i < firstArrayL; i++) {
//         let elementFirstArray = firstArray[i];
//         let elementSecondArray = secondArray[i];

//         if (i % 2 === 0) {
//             let sum = Number(elementFirstArray) + Number(elementSecondArray);
//             thirdArray.push(sum);
//         } else {
//             thirdArray.push(elementFirstArray + elementSecondArray);
//         }
//     }
//     console.log(thirdArray.join(' - '));
// }

// mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
// mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);


// function arrayRotation(array, rotations) {

//     for (let i = 0; i < rotations; i++) {
//         let currentNum = array[0];
//         let firstElement = array.shift(currentNum);
//         array.push(firstElement);
//     }
//     console.log(array.join(' '));
// }

// arrayRotation([51, 47, 32, 61, 21], 2);


// function arrayRotation(array, rotations) {

//     let arrayL = array.length;
//     for (let i = 0; i < rotations; i++) {
//         let currentNum = array[0];
//         for (let j = 0; j < arrayL - 1; j++) {
//             array[j] = array[j + 1];

//         }
//         let lastElement = arrayL - 1;
//         array[lastElement] = currentNum;
//     }

//     console.log(array);
// }

// arrayRotation([51, 47, 32, 61, 21], 2);


// function arrayRotation(array, rotations) {

//     let arrayL = array.length;
//     let newArray = [];

//     for (let i = 0; i < rotations; i++) {
//         let firstElement = array[0];
//         for (let j = 1; j < arrayL; j++) {
//             let nextElement = array[j];
//             newArray.push(nextElement);
//         }
//         newArray.push(firstElement); 
//         array = newArray; 
//         newArray = [];
//     }
//     console.log(array.join(' '));
// }

// arrayRotation([51, 47, 32, 61, 21], 2);


// function maxNumber(array) {

//     let top = [];
//     let arrayL = array.length;

//     for (let i = 0; i < arrayL; i++) {
//         let topInt = array[i];
//         isTopInteger = true;
//         for (let j = i + 1; j < arrayL; j++) {
//             let currentNumber = array[j];
//             if (topInt <= currentNumber) {
//                 isTopInteger = false;
//                 topInt = currentNumber;
//                 break;
//             }
//         }
//         if (isTopInteger) {
//             top.push(topInt);
//         }
//     }

//     console.log(top.join(' '));
// }

//maxNumber([1, 4, 3, 2]);
// maxNumber([41, 34, 20]);


// function equalSums(array) {

//     let arrayL = array.length;
//     let isEqualSum = false;

//     for (let i = 0; i < arrayL; i++) {
//         let sumLeft = 0;
//         let sumRight = 0;
//         //Сбор на левите елементи
//         for (let leftElement = 0; leftElement < i; leftElement++) {
//             let number = array[leftElement];
//             sumLeft += number;
//         }
//         //Сбор на десните елементи
//         for (let rightElement = i + 1; rightElement < arrayL; rightElement++) {
//             let number = array[rightElement];
//             sumRight += number;
//         }
//         //Сравняваме сбора на левите елементи със сбора на десните елементи
//         if (sumLeft === sumRight) {
//             isEqualSum = true;
//             console.log(i);
//         }
//     }
//     if (isEqualSum === false) {
//         console.log('no');
//     }
// }

//equalSums([1, 2, 3, 3]);
//equalSums([1, 2]);
//equalSums([1]);


// function maxSequenceOfEqualElements(array) {

//     let arrayL = array.length;
//     let equalElements = [];

//     for (let i = 0; i < arrayL; i++) {
//         let currentNum = array[i];
//         let newArray = [];
//         for (let j = i; j < array.length; j++) {
//             let rightElement = array[j];
//             if (currentNum === rightElement) {
//                 newArray.push(currentNum);
//             } else {
//                 break;
//             }
//         }
//         if (newArray.length > equalElements.length) {
//             equalElements = newArray;
//         }
//     }
//     console.log(equalElements.join(' '));
// }

//maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);


// function magicSum(array, equalSum) {
    
//     let arrayL = array.length;
//     let arrayEqualSum = [];

//     for (let i = 0; i < arrayL; i++) {
//         let oneNumber = array[i];
//         for (let j = i + 1; j < arrayL; j++) {
//             let secondNumber = array[j];
//             if (oneNumber + secondNumber === equalSum) {
//                 arrayEqualSum.push(`${oneNumber} ${secondNumber}`);
//             }
//         }
//     }
//     console.log(arrayEqualSum.join('\n')); 
// }

//magicSum([1, 7, 6, 2, 19, 23], 8);
//magicSum([14, 20, 60, 13, 7, 19, 8], 27);
//magicSum([1, 2, 3, 4, 5, 6], 6);


