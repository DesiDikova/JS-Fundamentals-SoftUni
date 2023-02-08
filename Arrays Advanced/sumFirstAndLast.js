function sumFirstAndLast(array) {
    //превръщане на масива от стрингове в масив от числа
    let newArray = array.map(x => Number(x));
    
    //взимане на първия елемент
    let firstNumber = newArray.shift();

    //взимане на последния елемент
    let lastNumber = newArray.pop();

    //сбор на двата елемента
    let rezult = firstNumber + lastNumber;

    //отпечатване на резултата
    console.log(rezult);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);



// let arr = [3, 8, -1, 5, 2];
// arr.unshift(arr.pop());
// console.log(arr[4])

// function demo(array) {
    
//     let arr = array.slice(4,-1);
//     console.log(arr)
// }

// demo(['20', '30', '40']);

