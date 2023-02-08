function printNElement(array) {
    
    let arrayL = array.length;
    let step = array.pop();
    let newArray = [];

    for (let i = 0; i < arrayL - 1; i++) {
        if (i % step === 0) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray.join(' '));
}

printNElement(['5', '20', '31', '4', '20', '2']);
// printNElement(['dsa', 'asd', 'test', 'test', '2']);
// printNElement(['1', '2', '3', '4', '5', '6']);
