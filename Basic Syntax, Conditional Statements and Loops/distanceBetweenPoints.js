function distanceBetweenPoints(x1, y1, x2, y2) {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt(a * a + b * b);

    console.log(c);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);


// function distanceBetweenPoints(num1, num2, num3, num4) {
//     let x1 = num1;
//     let y1 = num2;
//     let x2 = num3;
//     let y2 = num4;
//     let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
//     console.log(distance);

// }