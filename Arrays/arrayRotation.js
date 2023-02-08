function arrayRotation(arr, num) {
    let array = arr;
    let numbersRotations = num;

    for (let i = 0; i < numbersRotations; i++) {
        let elemToMove = array.shift();
        array.push(elemToMove);
    }
    console.log(array.join(' '));
}

//arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
 arrayRotation([2, 4, 15, 31], 5);
