function magicSum(array, num) {
    
    let arrayL = array.length;
    let newArray = [];

    for (let i = 0; i < arrayL; i++) {
        let firstNum = array[i];
        for (let j = i + 1; j < arrayL; j++) {
            let secondNum = array[j];
            if (firstNum + secondNum === num) {
                console.log(`${firstNum} ${secondNum}`);
                //newArray.push(`${firstNum} ${secondNum}`);
            }
        }
    }
    //console.log(newArray.join('\n'));
}

magicSum([1, 7, 6, 2, 19, 23], 8);
// magicSum([14, 20, 60, 13, 7, 19, 8], 27);
// magicSum([1, 2, 3, 4, 5, 6], 6);