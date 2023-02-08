/*function processOddNumbers(array) {

    //филтриране на индексите в масива (трябва да вземем елемента на нечетен индекс)
    let filterNumbers = array.filter((x, i) => i % 2 === 1);
    
    //удвоената стойност на елементите на нечетна позиция
    let double = filterNumbers.map(x => x * 2);

    //обратен ред на елементите в масива
    let rezult = double.reverse();

    //отпечатване на резултата
    console.log(rezult.join(' '));
} */

function processOddNumbers(array) {
    
    console.log(
        array
        .filter((x, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' ')
        );
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);