function addAndSubtract(a, b, c) {
    //получаване на резултата а + b
    let rez = sum(a, b);

    //получаване на разликата от резултата (а + b) - c 
    let totalRez = subtract(rez, c)

    //отпечатване на крайния резултат
    console.log(totalRez);

    //сбор на числата 'а' и 'b'
    function sum(a, b) {
        return a + b;
    } 

    //разлика на резултата от първата функция и числото 'с'
    function subtract(rez, c) {
        return rez - c;
    }
    
}

// function addAndSubtract(a, b, c) {
    
//     let sum = (a, b) => a + b;
//     let subtract = (rez, c) => rez - c;

//     let rez = sum(a, b);
//     let totalRez = subtract(rez, c)
//     console.log(totalRez);
    
// }

// addAndSubtract(23, 6, 10);
// addAndSubtract(1, 17, 30);
// addAndSubtract(42, 58, 100);

function addAndSubtract(a, b, c) {
    return a + b - c;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));

