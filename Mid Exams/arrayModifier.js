// function arrayModifier(array) {

//     //вземаме първият елемент от масива и го преобразуваме в масив от числа
//     let arrayValues =
//         array
//             .shift()
//             .split(' ')
//             .map(Number);

//     let arrayL = array.length;
//     let newArr = [];

//     //цикъл, който ще върти по дължината на масива, вземайки съответния елемент
//     for (let i = 0; i < arrayL; i++) {
//         let [command, firstIndex, secondIndex] = array[i].split(' ');

//         firstIndex = Number(firstIndex);
//         secondIndex = Number(secondIndex);

//         switch (command) {
//             //подавам параметри
//             case 'swap': swap(firstIndex, secondIndex); break;
//             case 'multiply': multiply(firstIndex, secondIndex); break;
//             case 'decrease': decrease(arrayValues); break;
//         }
//     }

//     //да се разменят местата на два елемента, в съответствие по индексите им
//     function swap(firstIndex, secondIndex) {
//         let firstElement = arrayValues[firstIndex];
//         let secondElement = arrayValues[secondIndex];
//         arrayValues[firstIndex] = secondElement;
//         arrayValues[secondIndex] = firstElement;
//     }

//     //да се умножи елемента от първия индекс с елемента от втория индекс и да се запази резултата в първия индекс
//     function multiply(firstIndex, secondIndex) {
//         let firstElement = arrayValues[firstIndex];
//         let secondElement = arrayValues[secondIndex];
//         arrayValues[firstIndex] = firstElement * secondElement;
//     }

//     //да се намалят всички елементи с 1-ца
//     function decrease(arrayValues) {
//         for (let elem of arrayValues) {
//             elem = elem - 1;
//             newArr.push(elem);
//         }
//     }

//     //отпечатване на резултата
//     console.log(newArr.join(', '));    
// }


// arrayModifier([
//     '23 -2 321 87 42 90 -123',
//     'swap 1 3',
//     'swap 3 6',
//     'swap 1 0',
//     'multiply 1 2',
//     'multiply 2 1',
//     'decrease',
//     'end'
// ]);


function arrayModifier(array) {

    let arrayValues =
        array
            .shift()
            .split(' ')
            .map(Number);

    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        let [command, firstIndex, secondIndex] = array[i].split(' ');

        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        //да се разменят местата на два елемента, в съответствие с индексите им
        if (command === 'swap') {
            let firstElement = arrayValues[firstIndex];
            let secondElement = arrayValues[secondIndex];
            arrayValues[firstIndex] = secondElement;
            arrayValues[secondIndex] = firstElement;
        }

        //да се умножи елемента от първия индекс с елемента от втория индекс и да се запази резултата в първия индекс
        if (command === 'multiply') {
            let firstElement = arrayValues[firstIndex];
            let secondElement = arrayValues[secondIndex];
            arrayValues[firstIndex] = firstElement * secondElement;
        }

        if (command === 'decrease') {
            //да се намалят всички елементи с 1-ца
            arrayValues = arrayValues.map(x => x - 1);
        }
    }

//отпечатване на резултата
console.log(arrayValues.join(', '));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);

