function arrayManipulations(array) {

    //вземаме първият елемент от масива и го преобразуваме в масив от числа
    let arrayNumbers =
        array
            .shift()
            .split(' ')
            .map(Number);

    //взимаме дължината на масива
    let arryL = array.length;

    //цикъл, който ще върти по дължината на масива, вземайки съответния елемент
    for (let i = 0; i < arryL; i++) {
        //вземаме команда, число, индекс (само при команда insert - ще вземем индекса (secondElement))
        let [command, firstElement, secondElement] = array[i].split(' ');
        firstElement = Number(firstElement);
        secondElement = Number(secondElement);

        switch (command) {
            //подаваме съответните параметри
            case 'Add': add(firstElement); break;
            case 'Remove': remove(firstElement); break;
            case 'RemoveAt': removeAt(firstElement); break;
            case 'Insert': insert(firstElement, secondElement); break;
        }
    }
    //добавяне на число в края на масива
    function add(elem) {
        arrayNumbers.push(elem);
    }

    //премахване на конкретното число, навсякъде където се среща в масива
    function remove(number) {
        arrayNumbers = arrayNumbers.filter(elem => elem !== number);
    }

    //премахване на число от съответния индекс
    function removeAt(index) {
        arrayNumbers.splice(index, 1);
    }
    //вмъкване на число в съответния индекс
    function insert(number, index) {
        arrayNumbers.splice(index, 0, number);
    }

    //отпечатване на резултата
    console.log(arrayNumbers.join(' '));
}

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
// arrayManipulations([
//     '6 12 2 65 6 42',
//     'Add 8',
//     'Remove 12',
//     'RemoveAt 3',
//     'Insert 6 2'
// ]);