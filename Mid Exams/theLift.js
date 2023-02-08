function theLift(array) {

    let people = Number(array.shift());
    let placeInTheLift = array.toString().split(' ').map(Number);

    while (people !== 0) {
        placeInTheLift = placeInTheLift.map(wagon => {
            let freePlace = 4 - wagon
            if (freePlace > people) {
                freePlace = people;
            }
            people -= freePlace;
            wagon += freePlace;
            return wagon;
        })
    }

    console.log(placeInTheLift)

    // if (people <= 0 && freeWagons > 0) {
    //     console.log(`The lift has empty spots! \n ${finalStateLift.join(' ')}`);
    // } else if (people > 0 && freeWagons <= 0) {
    //     console.log(`There isn't enough space! ${people} people in a queue! \n ${finalStateLift.join(' ')}`);
    // } else {
    //     console.log(`${finalStateLift.join(' ')}`);
    // }
}

//theLift(["20", "0 2 0"]);
theLift(["15", "0 0 0 0 0"]);