function biggestOf3Numbers(num1, num2, num3) {
    let firstNum = num1;
    let secondNum = num2;
    let thirdNum = num3;

    let biggestNum = Math.max(firstNum, secondNum, thirdNum); 
    console.log(biggestNum);
}

biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);