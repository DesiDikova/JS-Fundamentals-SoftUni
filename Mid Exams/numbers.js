// function numbers(nums) {

//     //превръщане на стринга в масив от числа
//     let arrayNums = nums.split(' ').map(Number);
//     let averageSum = 0;
//     let newArray = [];

//     //намираме средната стойност
//     for (let element of arrayNums) {
//             averageSum += element;        
//         }   

//     averageSum = averageSum / arrayNums.length;

//     //намиране на онези елементи, които са по-големи от средната стойност
//     for (let maxNum of arrayNums) {
//         if (maxNum > averageSum) {
//             newArray.push(maxNum);
//         } else if (arrayNums.length <= 1) {
//             console.log(`No`);
//             return;
//         }
//     }

//     //сортиране на елементите в намаляващ ред и взимане на първите 5 най-големи елемента
//     newArray = newArray.sort((a, b) => b - a).splice(0,5);

//     //отпечатване на резултата
//     console.log(newArray.join(' '));

// }

//  numbers('10 20 30 40 50');
//  numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
//  numbers('1');
//  numbers('-1 -2 -3 -4 -5 -6');



function numbers(nums) {

    let arrayNums = nums.split(' ').map(Number);
    let averageSum = 0;

    for (let element of arrayNums) {
        averageSum += element;
    }

    averageSum = averageSum / arrayNums.length;

    arrayNums = arrayNums
        .filter(x => x > averageSum)
        .sort((a, b) => b - a)
        .splice(0, 5)
        .join(' ');

    if (arrayNums.length < 1) {
        console.log(`No`);
    } else {
        console.log(arrayNums);
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');