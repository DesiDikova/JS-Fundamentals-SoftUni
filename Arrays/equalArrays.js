function equalArrays(arr1, arr2) {
    let furstArray = arr1;
    let secondArray = arr2;
    let furstArrayL = furstArray.length;
    let sum = 0;

    for (let i = 0; i < furstArrayL; i++) {
        if (furstArray[i] !== secondArray[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(furstArray[i]);
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
//equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
//equalArrays(['1'], ['10']);