function maxNumber(arr) {
    let array = arr;
    let arrayL = array.length;
    let topInteger = [];
   
   
    for (let i = 0; i < arrayL; i++) {
        let currentNum = array[i]; 
        let isTopInteger = true;
        
        for (let j = i + 1; j < arrayL; j++) {
            let num = arr[j];
            if (currentNum <= num) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            topInteger.push(currentNum);
        }
    }
    console.log(topInteger.join(' '));
}

//maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
// maxNumber([41, 41, 34, 20]);
// maxNumber([27, 19, 42, 2, 13, 45, 48]);

