function reverseAnArrayOfNumbers(num, arr) {
    let newArr = [];
    let reverseNewArr;
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    reverseNewArr = newArr.reverse();
    console.log(reverseNewArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);