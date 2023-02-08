function triangleArea(num1, num2, num3) {
    let a = num1;
    let b = num2;
    let c = num3;
    let semiPerimeter = 0;
    let triangleArea = 0;

    semiPerimeter = (a + b + c) / 2;
    triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));

    console.log(triangleArea);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);