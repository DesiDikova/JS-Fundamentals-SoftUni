function integerAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    let type = sum % 1 === 0 ? 'Integer' : 'Float';
    console.log(`${sum} - ${type}`);
    // if (sum % 1 === 0) {
    //     console.log(`${sum} - Integer`);
    // } else {
    //     console.log(`${sum} - Float`);
    // }
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);