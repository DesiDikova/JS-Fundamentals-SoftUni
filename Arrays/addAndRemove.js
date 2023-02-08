function addAndRemove(array) {
    
    let arrayL = array.length;
    let arrayAddAndRemoveNumbers = [];
    let sum = 0;
    
    for (let i = 0; i < arrayL; i++) {
        let comand = array[i];
        if (comand === 'add') {
           sum = i + 1;
           arrayAddAndRemoveNumbers.push(sum);
        } else if (comand === 'remove') {
            arrayAddAndRemoveNumbers.pop();
        }
    }
    if (arrayAddAndRemoveNumbers.length === 0) {
        console.log('Empty');
    } else {
        console.log(arrayAddAndRemoveNumbers.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);