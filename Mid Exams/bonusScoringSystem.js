function bonusScoringSystem(array) {

    let numberStudents = Number(array.shift());
    let numberLectures = Number(array.shift());
    let additionalBonus =  Number(array.shift());
    let maximumBonusPoints = 0;
    let lectures = 0;

    for (let element of array) {
        let attendanceStudent = Number(element);
        bonusPoints = (attendanceStudent / numberLectures) * (5 + additionalBonus);
        if (bonusPoints >= maximumBonusPoints) {
            maximumBonusPoints = bonusPoints;
            lectures = attendanceStudent;
        }  
    }
    console.log(`Max Bonus: ${Math.ceil(maximumBonusPoints)}.`);
    console.log(`The student has attended ${lectures} lectures.`);
}

//bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
