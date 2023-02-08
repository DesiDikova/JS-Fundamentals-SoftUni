function primeNumberChecker(input) {
    let number = input;
    isPrimeNumber = true;
    if (number < 0) {
        console.log(`false`);
    } 
    if (number === 1) {
        console.log(`true`);
    }
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i  === 0) {
                isPrimeNumber = false;
                break;
            }   
        }
        if (isPrimeNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);