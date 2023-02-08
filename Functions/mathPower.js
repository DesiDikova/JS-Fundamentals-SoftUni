// function mathPower(num, power) {
    
//     console.log(Math.pow(num, power));
// }

// mathPower(2, 8);
// mathPower(3, 4);

function mathPower(num, power) {

    let sum = 1;
    for (let i = 0; i < power; i++) {
        sum *= num;
    }
    
    console.log(sum);
}

mathPower(2, 8);
//mathPower(3, 4);