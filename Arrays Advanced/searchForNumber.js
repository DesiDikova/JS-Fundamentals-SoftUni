function searchForNumber(firstArray, secondArray) {

    let countNumber = secondArray[0];
    let deleteNumber = secondArray[1];
    let searchNumber = secondArray[2];

    firstArray = firstArray.slice(0, countNumber).splice(deleteNumber);

    let count = 0;

    for (let element of firstArray) {
        if (element === searchNumber) {
            count++;
        }
    }
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}



searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);
