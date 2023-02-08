// function factorialDivision(firstNumber, secondNumber) {

//     let firstFactorial = 1;
//     let secondFactorial = 1;
//     //намиране фактуриела на първото число
//     for (let i = firstNumber; i > 0; i--) {
//         firstFactorial *= i;
//     }
//     //намиране фактуриела на второто число
//     for (let i = secondNumber; i > 0; i--) {
//         secondFactorial *= i;
//     }

//     //разделям първият фактуриел на втория
//     let divide = firstFactorial / secondFactorial;
    
//     console.log(divide.toFixed(2));
// }

function factorialDivision(firstNumber, secondNumber) {

    function calcFactorial(number) {
        let sumFactorial = 1;
        for (let i = number; i > 0; i--) {
            sumFactorial *= i;
        }
        return sumFactorial;
    }

    let finalRezult = calcFactorial(firstNumber) / calcFactorial(secondNumber);
    console.log(finalRezult.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);