function condenseArrayToNumber(arr) {
    let array = arr;
    
    while (array.length > 1) {
        let newArr = [];
        for (let i = 0; i < array.length - 1; i++) {
            let num1 = array[i];
            let num2 = array[i + 1];
            let sum = num1 + num2;
            newArr.push(sum);
        }
        array = newArr;
    }
    console.log(array[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1]);