function counterStrike(array) {

    let initialEnergy = Number(array.shift());
    let index = 0;
    let sumBattles = 0;

    while (array[index] !== 'End of battle') {
        let distance = Number(array[index]);
        //ако нямаме достатъчно енергия - програмата приключва
        if (initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${sumBattles} won battles and ${initialEnergy} energy`);
            return;
        }

        initialEnergy -= distance;
        sumBattles++;

        //при всяка трета битка се увеличава енергията с текущия брой спечелени битки
        if (sumBattles % 3 === 0) {
            initialEnergy += sumBattles;
        }
        index++;
    }
    //ако енергията е достатъчна- отпечатваме броя на спечелените битки и останалата енергия
    console.log(`Won battles: ${sumBattles}. Energy left: ${initialEnergy}`)
}

counterStrike([
    "100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]);

// counterStrike([
//     "200",
//     "54",
//     "14",
//     "28",
//     "13",
//     "End of battle"
// ]);

