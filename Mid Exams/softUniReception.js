function softUniReception(array) {
    
    let firstEmployee = Number(array[0]);
    let secondEmployee = Number(array[1]);
    let thirdEmployee = Number(array[2]);
    let numStudents = Number(array[3]);
    let sumHours = 0;
    let sumStudentsForOneHour = firstEmployee + secondEmployee + thirdEmployee;

    while (numStudents > 0) {
        numStudents -= sumStudentsForOneHour;
        sumHours++;
        if (sumHours % 4 === 0) {
            sumHours++;
        }
    }
    
    console.log(`Time needed: ${sumHours}h.`);
}

softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);