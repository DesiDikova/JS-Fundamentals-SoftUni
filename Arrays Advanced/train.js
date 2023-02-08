function train(array) {

    //взимам първия елемент от масива (вагоните с броя пътници във всеки) и го преобразувам в масив от числа
    let wagons = array.shift().split(' ').map(Number);

    //взимам втория елемент от масива (махсимален капацитет във всеки вагон) и го преобразувам в число
    let maxCapacity = Number(array.shift());

    let arrayL = array.length;
    let wagonsL = wagons.length;

    //минавам през всеки елемент от масива до неговата дължина
    for (let i = 0; i < arrayL; i++) {
        //вземам команда и пътници (преобразувани в число)
        let [command, passengers] = array[i].split(' ');
        passengers = Number(passengers);
        //ако командата е 'Add' - нека пътниците се добавят в края на масива
        if (command === 'Add') {
            wagons.push(passengers);
        } else {
            //ако командата е различна от 'Add', то броя на пътниците са равни на command (преобразувана в число)
            for (let j = 0; j < wagonsL; j++) {
                passengers = Number(command);
                //ако сумата на: броя пътници във вагона на текущия индекс и броя пътници 
                //от текущата команда е по-малка или равна на maxCapacity, то тогава
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += passengers; //нека добавим текущата команда към броя пътници във вагона
                    break; //нека прекъснем цикъла, за да вземем следващата команда
                }
            }
        }
    }
    //отпечатване на резултата
    console.log(wagons.join(' '));
}

train([
    '32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);

train([
    '0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]);