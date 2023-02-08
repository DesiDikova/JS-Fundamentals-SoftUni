// function simpleCalculator(firstNum, secondNum, operator) {

//     //калкулираме резултата
//     let rez = getOperator(operator);

//     //определяме резултата, според вида на оператора
//     function getOperator(operator) {
//         switch (operator) {
//             case 'multiply':
//                 return firstNum * secondNum;
//             case 'divide':
//                 return firstNum / secondNum;
//             case 'add':
//                 return firstNum + secondNum;
//             case 'subtract':
//                 return firstNum - secondNum;
//         }
//     }
//     //отпечатваме резултата
//     console.log(rez);
// }

// simpleCalculator(5, 5, 'multiply');
// simpleCalculator(40, 8, 'divide');
// simpleCalculator(12, 19, 'add');
// simpleCalculator(50, 13, 'subtract');


function simpleCalculator(firstNum, secondNum, operator) {

    let operators = {
        'multiply': (firstNum, secondNum) => (firstNum * secondNum),
        'divide': (firstNum, secondNum) => (firstNum / secondNum),
        'add': (firstNum, secondNum) => (firstNum + secondNum),
        'subtract': (firstNum, secondNum) => (firstNum - secondNum),
    }
    
    let rez = operators[operator](firstNum,secondNum);

    console.log(rez);
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');