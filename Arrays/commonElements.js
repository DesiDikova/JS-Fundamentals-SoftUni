function commonElements(arr1, arr2) {
    let furstArray = arr1;
    let secondArray = arr2;
    let furstArrayL = furstArray.length;
    let secondArrayL = secondArray.length;

    for (let i = 0; i < furstArrayL; i++) {
        let elemFurstArray = furstArray[i];

        if (furstArray.includes(elemFurstArray) === secondArray.includes(elemFurstArray)) {
            console.log(elemFurstArray);
        }
        
    }
    // for (let i = 0; i < furstArrayL; i++) {
    //     let elemFurstArray = furstArray[i];
    //     for (let j = 0; j < secondArrayL; j++) {
    //         let elemSecondArray = secondArray[j];
    //         if (elemFurstArray === elemSecondArray) {
    //             console.log(elemFurstArray);
    //         }
    //     }
    // }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);