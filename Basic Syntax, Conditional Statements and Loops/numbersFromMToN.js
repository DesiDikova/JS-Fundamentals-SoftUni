// function numbersFromMToN (numberM, numberN) {
//     for(let i = numberM; i >= numberN; i--) {
//         console.log(i);
//     }
// }

function numbersFromMToN (numberM, numberN) {
    while(numberM >= numberN) {
        console.log(numberM);
        numberM--; 
    }
}

numbersFromMToN(6, 2);
numbersFromMToN(4, 1);