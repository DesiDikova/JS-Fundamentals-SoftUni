function negativeOrPositiveNumbers(array) {

    //създаване на нов масив, където ще събирам новите резултати
    let arrayNumbers = [];

    //цикъл, който ще взема всеки елемент от масива
    for (let element of array) {
        //превръщане на стринга в число
        let numElement = Number(element);
        //ако числото е положително (или нула) да се добави в края на новия масив
        if (numElement >= 0) {
            arrayNumbers.push(numElement);
        //ако числото е отрицателно да се добави в началото на новия масив    
        } else if (numElement < 0) {
            arrayNumbers.unshift(numElement);
        }
    }
    //отпечатване на резултата (всяко число на нов ред)
    console.log(arrayNumbers.join('\n'));    
} 

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);