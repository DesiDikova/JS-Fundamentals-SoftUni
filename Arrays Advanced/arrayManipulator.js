function arrayManipulator(arrayNumbers, arrayCommand) {

    let arrayNumbersL = arrayNumbers.length;
    let newArrayNumbers = [];

    for (let elem of arrayCommand) {
        [command, index, firstElement] = elem.split(' ');
        index = Number(index);
        firstElement = Number(firstElement);

        if (command === 'add') {
        //започни от индекс 'index', изрежи '0' елементи и добави firstElement
            arrayNumbers.splice(index, 0, firstElement); 

        } else if (command === 'addMany') {
            let commandOfElements = elem.split(' ')
            let commandOfElementsL = commandOfElements.length;
            
            //сформирвам набора от елементи
            for (let i = 2; i < commandOfElementsL; i++) {
                let currentElement = Number(commandOfElements[i]);

                newArrayNumbers.push(currentElement);
                
               // newArrayNumbers = newArrayNumbers.join(' ');
                //arrayNumbers.splice(index, 0, newArrayNumbers);
                //console.log(newArrayNumbers)
            }
            newArrayNumbers = newArrayNumbers.join(' ');
            //arrayNumbers.splice(index, 0, Number (newArrayNumbers));
            //console.log(arrayNumbers);
                
            

        } else if (command === 'contains') {
            //отпечатвам индекса на елемента (ако съществува) или -1, ако елемент не е намерен
            let currentIndex = arrayNumbers.indexOf(index);
            console.log(currentIndex);

        } else if (command === 'remove') {
            //премахвам елемента с посочения индекс
            arrayNumbers.splice(index,1);

        } else if (command === 'shift') {
            //измествам всеки елемент от масива с броя позиции наляво
            for (let i = 0; i < index; i++) {
                let currentElement = arrayNumbers.shift();
                arrayNumbers.push(currentElement);
            }

        } else if (command === 'sumPairs') {
            //сумирам елементите в масива по двойки

            //ако масива е с нечетен брой елементи - добави накрая на масива "0"
            if (arrayNumbersL % 2 !== 0) {
                newArrayNumbers.push(0);
            }
            for (let i = 0; i < arrayNumbersL; i += 2) {
                let sum = arrayNumbers[i] + arrayNumbers[i + 1];
                newArrayNumbers.push(sum);
            }

            arrayNumbers = newArrayNumbers; 

        } else if (command === 'print') {
            //отпечатвам последното състояние на масива
            console.log(arrayNumbers);
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);