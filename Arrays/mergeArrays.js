function mergeArrays(arr1, arr2) {
    let furstArray = arr1;
    let secondArray = arr2;
    let furstArrayL = furstArray.length;
    let newArray = [];
    let sum = 0;
    
    for (let i = 0; i < furstArrayL; i++) {
        let elemFurstArray = furstArray[i];
        if (i % 2 === 0) {
            sum = Number(elemFurstArray) + Number(secondArray[i]);
            newArray.push(sum);
        } else {
            newArray.push(elemFurstArray + secondArray[i]);
        }
    }
    console.log(newArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
//mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);