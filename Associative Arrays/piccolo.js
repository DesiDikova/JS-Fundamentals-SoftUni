function piccolo(input) {

    //създавам празен обект, в който ще събирам атомобилите
    let parking = new Map();

    //взимам две променливи: команда и номер на автомобил
    for (let tokens of input) {
        let [command, numberCar] = tokens.split(', ');
        //проверявам, ако командата е 'IN' добави номера на автомобила в мап-а
        if (command === 'IN') {
            parking.set(numberCar, 1);
        // ако командата е 'OUT' изстрий номера на автомобила
        } else if (command === 'OUT') {
            parking.delete(numberCar);
        }
    }

    //ако няма автомобили в паркинга, трябва да се отпечата съобщение
    if (parking.size === 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }
    
    //превръщам мап-а в масив и сортирам номерата на автомобилите във възходящ ред
    let sortParking = Array.from(parking).sort();
    
    //отпечатвам резултата
    for (let [numberCar, value] of sortParking) {
        console.log(numberCar);
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);