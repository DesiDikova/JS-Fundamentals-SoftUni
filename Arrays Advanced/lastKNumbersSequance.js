function lastKNumbersSequance(n, k) {
    
    //създаване на нов масив, започващ от 1-ца
    let arrayNumbers = [1];

    //повтори, докато дължината на масива е различна от n
    while (arrayNumbers.length !== n) {
        //взимане на последните k елементи
        let lastNums = arrayNumbers.slice(-k);
        let sum = 0;

        for (let element of lastNums) {
            //сумиране на последните к елементи
            sum += element;
        }

        //добавяне на сумата в масива
        arrayNumbers.push(sum);
    }
    
    //отпечатване на масива
    console.log(arrayNumbers.join(' '));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);