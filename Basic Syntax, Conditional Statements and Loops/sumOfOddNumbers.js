function sumOfOddNumbers(num) {

    let count = 0;
    let totalSum = 0;

    for (let currectNumber = 1; currectNumber <= 100; currectNumber++) {
        if (currectNumber % 2 !== 0) {
            console.log(currectNumber);
            count++;
            totalSum += currectNumber;
            if (count === num) {
                break;
            }
        }
    }
    console.log(`Sum: ${totalSum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);