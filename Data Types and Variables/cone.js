function cone(num1, num2) {
    let radius = num1;
    let height = num2;
    let volume = 0;
    let area = 0;
    let formingTheCone = 0;

    volume = 1 / 3 * Math.PI * radius * radius * height;
    formingTheCone = Math.sqrt(radius * radius + height * height);
    area = Math.PI * radius * (radius + formingTheCone);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`); 
}

cone(3, 5);
cone(3.3, 7.8);