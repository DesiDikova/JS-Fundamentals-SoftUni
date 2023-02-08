function sortNumbers(num1, num2, num3) {
    let firstNum = num1;
    let secondNum = num2;
    let thirdNum = num3;

    let array = [];

    array.push(firstNum, secondNum, thirdNum);
    array.sort((a, b) => b - a);
    console.log(array.join('\n'));
}

//sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
//sortNumbers(0, 0, 2);

