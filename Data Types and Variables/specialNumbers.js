function specialNumbers (num) {
    for (let i = 1; i <= num; i++) {
        let tempNum = i;
        let sum = 0;

        while (tempNum > 0) {
            sum += tempNum % 10;
            tempNum = parseInt(tempNum / 10);
        }

        let rez = sum === 5 || sum === 7 || sum === 11 ? 'True' : 'False'

        console.log(`${i} -> ${rez}`);
    }
}

specialNumbers(15)