function nonDecreasingSubset(array) {

    let arrayL = array.length;
    let newArray = [];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arrayL; i++) {
        let currentNum = array[i];
        if (currentNum >= maxNumber) {
            maxNumber = currentNum;
            newArray.push(maxNumber);
        } 
    }
    
    console.log(newArray.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);