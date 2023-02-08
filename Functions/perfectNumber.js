// function perfectNumber(number) {

//     let sum = 0;
//     //проверяваме дали числото е перфектно
//     for (let currentInteger = 1; currentInteger < number; currentInteger++) {
//         if (number % currentInteger === 0) {
//             sum += currentInteger;
//         }
//     }
//     //отпечатваме резултата
//     if (sum === number) {
//         console.log(`We have a perfect number!`);
//     } else {
//         console.log(`It's not so perfect.`);
//     }
// }


function perfectNumber(number) {

    function findPerfektNumber(n) {
        let sum = 0;
        for (let currentInteger = 1; currentInteger < n; currentInteger++) {
            if (n % currentInteger === 0) {
                sum += currentInteger;
            }
        }
        if (sum === n) {
            return 'We have a perfect number!';
        } else {
            return "It's not so perfect.";
        }
    }

    let perfectNumber = findPerfektNumber(number);
    console.log(perfectNumber);
    
}



perfectNumber(6);
// perfectNumber(28);
// perfectNumber(1236498);