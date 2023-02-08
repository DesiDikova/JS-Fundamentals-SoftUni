function sequenceOfEqualElements(arr) {
    let array = arr;
    let arrayL = array.length;
    let newArray = [];
    let firstArray = [];
    
    for (let i = 0; i < arrayL; i++) {
        let currentNum = arr[i];
        firstArray = [];
        for (let j = i; j < arrayL; j++) {
            let num = arr[j];
            if (currentNum === num) {
                firstArray.push(currentNum);
            } else {
                break;
            }
        }
        if (firstArray.length > newArray.length) {
            newArray = firstArray;
        }
    }
    console.log(newArray.join(' '));
}

sequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// sequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
 //sequenceOfEqualElements([4, 4, 4, 4]);
// sequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);