function needForSpeed(input) {

    let numCar = Number(input.shift()); //брой коли
    let endInput = input.pop();
    let car = {};

    //взимам броя коли с техните имена, пробег и гориво. След това ги добавям в обекта
    for (let i = 0; i < numCar; i++) {
        let [nameCar, mileage, fuel] = input[i].split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        car[nameCar] = { mileage: mileage, fuel: fuel };
    }

    let inputL = input.length;
    for (let i = numCar; i < inputL; i++) {
        let [command, nameCar, distance, fuel] = input[i].split(' : ');
        distance = Number(distance);
        fuel = Number(fuel);

        if (command === 'Drive') {
            //ако няма достатъчно гориво
            if (car[nameCar].fuel < fuel) {
                console.log(`Not enough fuel to make that ride`);
            }
            //ако има гориво
            if (car[nameCar].fuel >= fuel) {
                car[nameCar].mileage += distance;
                car[nameCar].fuel -= fuel;
                console.log(`${nameCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            //ако пробегът > 100000км.
            if (car[nameCar].mileage > 100000) {
                delete car[nameCar];
                console.log(`Time to sell the ${nameCar}!`);
            }
        }

        if (command === 'Refuel') {
            fuel = distance;
            car[nameCar].fuel += fuel;
            //всеки резервоар събира мак. 75л.гориво(нека да се отпечата необходимото кол-во, за да се напълни резервоара)
            if (car[nameCar].fuel > 75) {
                let remainder = car[nameCar].fuel - 75;
                let refueled = fuel - remainder;
                car[nameCar].fuel = 75;
                console.log(`${nameCar} refueled with ${refueled} liters`);
                continue;
            }

            console.log(`${nameCar} refueled with ${fuel} liters`);

        }

        if (command === 'Revert') {
            let kilometers = distance;
            car[nameCar].mileage -= kilometers;

            //ако пробегът < 10000км., то тогава нека той стане = 10000 и да не се печата нищо
            if (car[nameCar].mileage < 10000) {
                car[nameCar].mileage = 10000;
                break;
            }
            console.log(`${nameCar} mileage decreased by ${kilometers} kilometers`);
        }
    }

    let carObj = Object.entries(car);
    for (let element of carObj) {
        let nameCar = element[0];
        let mileage = element[1].mileage;
        let fuel = element[1].fuel;

        console.table(`${nameCar} -> Mileage: ${mileage} kms, Fuel in the tank: ${fuel} lt.`);
    }
}

// needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
// ]);
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);