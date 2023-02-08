function triangleOfNumbers(num) {

    for (let start = 1; start <= num; start++) {
        let string = '';
        for (let end = 1; end <= start; end++) {
            string += `${start} `;
        }
        console.log(string);   
    }
}

// function triangleOfNumbers(num) {
//     let str = '';
//     for (let i = 1; i <= num; i++) {
//         console.log(`${i} `.repeat(i));
//     }
// }
triangleOfNumbers(3);
// triangleOfNumbers(5);
// triangleOfNumbers(6);