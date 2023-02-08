function palindromeIntegers(array) {

    for (let number of array) {
        let numberToStrint = number.toString();
        let numberToReverse = numberToStrint.split('').reverse().join('');

        if (numberToStrint === numberToReverse) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
//palindromeIntegers([32,2,232,1010]);