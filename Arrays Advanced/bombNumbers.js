function bombNumbers(sequenceNumbers, bombNumberEndPower ) {
    
    let bombNumber = bombNumberEndPower[0]; 
    let power = bombNumberEndPower[1]; 
    let indexBombNumber = sequenceNumbers.indexOf(bombNumber); 
    
    while (!(indexBombNumber < 0)) {
        let startDetonations = Math.max(0, indexBombNumber - power);
        let endDetonations = power * 2 + 1;
        sequenceNumbers.splice(startDetonations, endDetonations);
        indexBombNumber = sequenceNumbers.indexOf(bombNumber);
    }

    let sum = 0;
    for (let element of sequenceNumbers) {
        sum += element;   
    }
    console.log(sum); 
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);