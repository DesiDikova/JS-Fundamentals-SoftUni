function firstAndLastKNumbers(array) {
    //взимам първото число, което е броя на числата, които трябва да взема в началото и в края на масива
    let countNumber = array.shift();

    //взима countNumber(броя числа) започващ от 0-я индекс
    let firstKNumbers = array.slice(0, countNumber);

    //взима последните countNumber (брой числа) 
    let lastKNumbers = array.slice(-countNumber);

    //отпечатване на резултата, разделен с интервал
    console.log(firstKNumbers.join(' '));
    console.log(lastKNumbers.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);