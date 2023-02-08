function equalSums(arr) {
    let array = arr;
    let arrayL = array.length;
    let isTheSumEqual = false;

    for (let i = 0; i < arrayL; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let elemRight = i - 1; elemRight >= 0; elemRight--) {
            sumRight += arr[elemRight];
        }
        for (let elemLeft = i + 1; elemLeft < arrayL; elemLeft++) {
            sumLeft += arr[elemLeft];
        }
        if (sumRight === sumLeft) {
            console.log(i);
            isTheSumEqual = true;
        }
    }
    if(!isTheSumEqual) {
        console.log(`no`);
    }
}

equalSums([1, 2, 3, 3]);
//equalSums([1, 2]);
//equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//equalSums([1, 2, 3]);
//equalSums([1]);